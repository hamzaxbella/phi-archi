import Image from 'next/image';
import HiringButton from './HiringButton';
import LanguageSwitcher from './LanguageSwitcher';
import { logo } from '../../public';
import Link from 'next/link';
const Nav = ({ locale , isRtl }) => {

  
  return (
    <div
      className="flex py-4 items-center justify-between padding-x md:bg-background md:rounded-md md:my-2 md:margin-x"
    >
      <Link href={'/'}>
        <Image src={logo} width={30} height={30} alt="logo" />
      </Link>
      <div className="flex md:flex-row-reverse items-center gap-6">
        <HiringButton isRtl={isRtl} locale={locale} />
        <LanguageSwitcher locale={locale} />
      </div>
    </div>
  );
};

export default Nav;
