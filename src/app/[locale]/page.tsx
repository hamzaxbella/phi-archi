import { Link } from '@/i18n/routing';
import Tester from '@/components/Tester';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function HomePage({ params }) {
  const { locale } = await params; // No need to await, just access directly
  return (
    <div>
      <h1>{locale}</h1>
      <Link href="/Agency">Hello</Link>
      <Tester locale={locale} />
    </div>
  );
}
