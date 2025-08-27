import { CaseStudy } from "@/components/CaseStudy";
import { Mockup } from "@/components/Mockup";

export default async function Works({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = await params;
  const { tab } = await searchParams;

  return tab === "case-study" ? (
    <CaseStudy slug={slug} />
  ) : (
    <Mockup slug={slug} />
  );
}
