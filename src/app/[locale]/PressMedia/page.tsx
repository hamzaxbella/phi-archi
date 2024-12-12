import PressList from "@/components/PressComponents/Press/PressList"

const Press = async ({params}) => {
  const {locale} = await params
  return (
    <PressList locale={locale} />
  )
}

export default Press