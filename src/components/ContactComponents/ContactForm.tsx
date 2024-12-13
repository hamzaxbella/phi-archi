'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = ({ locale }) => {
  const form = useRef<HTMLFormElement | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const placeholders = {
    en: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...'
    },
    ar: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'الرسالة',
      send: 'إرسال',
      sending: 'جاري الإرسال...'
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )

        if (response.status === 200) {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          })
          alert(locale === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!')
        } else {
          throw new Error('Failed to send message')
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert(locale === 'ar' 
            ? `خطأ في إرسال الرسالة: ${error.message}` 
            : `Error sending message: ${error.message}`)
          console.error('Contact form error:', error.message)
        } else {
          alert(locale === 'ar'
            ? 'خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
            : 'Error sending message. Please try again.')
          console.error('Contact form error:', error)
        }
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const isRtl = locale === 'ar'
  const texts = placeholders[locale === 'ar' ? 'ar' : 'en']

  return (
    <div className={`flex flex-col gap-4 justify-center mb-14 md:mb-0 md:py-8 h-full w-full md:px-12 ${isRtl ? 'rtl font-cairo' : 'ltr'}`}>
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
        <input 
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={texts.phone}
          required
          className="border border-gray-300 rounded-full px-4 placeholder:text-gray-500 min-h-[70px]"
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={texts.message}
          required
          className="border border-gray-300 rounded-3xl px-4 placeholder:text-gray-500 min-h-[200px] pt-4"
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-dark text-white rounded-full px-12 placeholder:text-gray-500 w-fit py-4 disabled:opacity-50"
        >
          {isSubmitting ? texts.sending : texts.send}
        </button>
      </form>
    </div>
  )
}

export default ContactForm