import SingleTeamMemberTemplate from "@/components/aboutComponents/SingleTeamMemberTemplate";
import { getTeamMember } from "@/lib/TeamHelper";

const SingleTeamMember = async ({ params }) => {
  const { slug, locale } = await params as { slug: string; locale: string };
  const data = await getTeamMember(slug);
  const isRtl = locale === "ar";

  return <SingleTeamMemberTemplate data={data} isRtl={isRtl} locale={locale} />;
};

export default SingleTeamMember;
