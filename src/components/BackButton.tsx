import Image from "next/image"
import Link from "next/link"
import { back_arrow } from "../../public"
interface BackButtonProps {
  path: string;
}

const BackButton = ({ path }: BackButtonProps) => {
  console.log("Path is " + `${path}`)
  return (
    <Link
      href={path} // Ensure this is a valid string
      className="fixed w-[70px] h-[70px] bottom-5 left-3 md:absolute md:bottom-0 md:left-0 rounded-full md:w-[290px] md:h-[90px] md:rounded-[15px] bg-dark text-light flex justify-center items-center gap-6 hover:gap-10 transition-all duration-300 md:py-4 md:px-12"
    >
      <Image
        className="md:-translate-x-4 w-[30px] h-[30px]"
        src={back_arrow}
        width={50}
        height={50}
        alt="back button"
      />
      <p className="hidden md:block text-2xl -translate-x-4">Back</p>
    </Link>
  );
};

export default BackButton;
