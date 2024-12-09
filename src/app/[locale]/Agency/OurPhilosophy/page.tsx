import Philosophy from "@/components/aboutComponents/Philosophy"

const OurPhilosophy = async ({params}) => {
  const {locale} = await params
  return (
    <section className=" w-full h-full  felx  justify-center items-center">
      <Philosophy locale={locale} />
    </section>
  )
}

export default OurPhilosophy