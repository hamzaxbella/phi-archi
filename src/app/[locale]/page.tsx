import Navigator from "@/components/Navigator";
export default async function HomePage({ params }) {
  const { locale } = await params; 
  const isRtl = locale === "ar";

  return (
    <div className='margin-x h-[100vh] remaining-height'>
      <Navigator locale={locale} isRtl = {isRtl}/>
    </div>
  );
}
