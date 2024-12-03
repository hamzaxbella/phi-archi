import { getStatesData } from "@/lib/FetchStates"
import StatesTemplate from "./StatesTemplate"

export default async function States ({locale}) {
  const numiricData = await getStatesData()
  return (
    <StatesTemplate data={numiricData} locale={locale}/>
  )
}

