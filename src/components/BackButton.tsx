import Image from "next/image"
import Link from "next/link"
import { back_arrow } from "../../public"
const BackButton = () => {
  return (
    <Link href={'/'} className="absolute w-[70px] h-[70px]  bottom-0 left-0 rounded-full md:w-[290px] md:h-[90px] md:rounded-[15px] bg-dark text-light flex justify-center items-center gap-6 hover:gap-10 transition-all duration-300 md:py-4 md:px-12 ">
      <Image className="md:-translate-x-4 w-[30px] h-[30px]" src={back_arrow} width={50} height={50}  alt="back button"/> 
      <p className="hidden md:block text-2xl -translate-x-4">Back</p>
    </Link>
  )
}

export default BackButton