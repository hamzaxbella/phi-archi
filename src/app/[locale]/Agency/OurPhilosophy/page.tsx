import Philosophy from "@/components/aboutComponents/Philosophy"

const OurPhilosophy = ({params}) => {
  const {locale} = params
  return (
    <div>
      <Philosophy locale={locale} />
    </div>
  )
}

export default OurPhilosophy