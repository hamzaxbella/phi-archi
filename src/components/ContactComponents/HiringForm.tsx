'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const HiringForm = ({ locale, isOpen, onClose }) => {
  const form = useRef<HTMLFormElement | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // image: null,
    // cv: null,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const placeholders = {
    en: {
      name: 'Full Name',
      email: 'Email Address', 
      // image: 'Upload Photo',
      // cv: 'Upload CV',
      message: 'Cover Letter',
      send: 'Submit Application',
      sending: 'Submitting...'
    },
    fr: {
      name: 'Nom Complet',
      email: 'Adresse Email',
      // image: 'Télécharger Photo',
      // cv: 'Télécharger CV',
      message: 'Lettre de Motivation',
      send: 'Soumettre la Candidature',
      sending: 'Soumission en cours...'
    },
    ar: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      // image: 'تحميل الصورة',
      // cv: 'تحميل السيرة الذاتية',
      message: 'خطاب التقديم',
      send: 'إرسال الطلب',
      sending: 'جاري الإرسال...'
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (form.current) {
      try {
        const formDataToSend = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          if (value !== null) {
            formDataToSend.append(key, value)
          }
        })

        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_HIRING_TEMPLATE_ID || '',
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )

        if (response.status === 200) {
          setFormData({
            name: '',
            email: '',
            // image: null,
            // cv: null,
            message: ''
          })
          alert(locale === 'ar' 
            ? 'تم إرسال الطلب بنجاح!' 
            : locale === 'fr'
              ? 'Candidature soumise avec succès !'
              : 'Application submitted successfully!')
          onClose()
        } else {
          throw new Error('Failed to send application')
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert(locale === 'ar' 
            ? `خطأ في إرسال الطلب: ${error.message}`
            : locale === 'fr'
              ? `Erreur lors de la soumission de la candidature: ${error.message}`
              : `Error submitting application: ${error.message}`)
          console.error('Hiring form error:', error.message)
        } else {
          alert(locale === 'ar'
            ? 'خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.'
            : locale === 'fr'
              ? 'Erreur lors de la soumission de la candidature. Veuillez réessayer.'
              : 'Error submitting application. Please try again.')
          console.error('Hiring form error:', error)
        }
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const isRtl = locale === 'ar'
  const texts = placeholders[locale] || placeholders.en

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${isRtl ? 'rtl font-cairo' : 'ltr'}`}>
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {locale === 'ar' 
              ? 'تقديم طلب توظيف' 
              : locale === 'fr'
                ? 'Soumettre une Candidature'
                : 'Submit Application'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={texts.name}
                required
                className="border flex-1 border-gray-300 rounded-full px-4 placeholder:text-gray-500 min-h-[70px]"
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={texts.email}
                required
                className="border flex-1 border-gray-300 rounded-full px-4 placeholder:text-gray-500 min-h-[70px]"
              />
            </div>
            
            {/* File upload section commented out
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  required
                  className="border w-full border-gray-300 rounded-full px-4 py-5 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-dark file:text-white hover:file:bg-gray-700"
                />
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="border w-full border-gray-300 rounded-full px-4 py-5 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-dark file:text-white hover:file:bg-gray-700"
                />
              </div>
            </div>
            */}

            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={texts.message}
              required
              className="border border-gray-300 rounded-3xl px-4 placeholder:text-gray-500 min-h-[200px] pt-4"
            />
            
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                {locale === 'ar' 
                  ? 'إلغاء' 
                  : locale === 'fr'
                    ? 'Annuler'
                    : 'Cancel'}
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-dark text-white rounded-full px-12 py-2 disabled:opacity-50 hover:bg-gray-700"
              >
                {isSubmitting ? texts.sending : texts.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HiringForm