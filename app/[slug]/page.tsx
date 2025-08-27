import { CaseStudy } from "@/components/CaseStudy";
import { Mockup } from "@/components/Mockup";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Works({ params, searchParams }: Props) {
  const { slug } = await params;
  const { tab } = await searchParams;

  return tab === "case-study" ? (
    <CaseStudy slug={slug} />
  ) : (
    <Mockup slug={slug} />
  );
}
