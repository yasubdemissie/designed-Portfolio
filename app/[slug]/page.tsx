import { Mockup } from "@/components/Mockup";

export default async function Works({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return <Mockup slug={slug} />;
}
