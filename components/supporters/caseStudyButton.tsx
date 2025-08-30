"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyButton({ path }: { path?: string }) {
  const navigate = useRouter();
  return (
    <Button
      onClick={() =>
        path
          ? navigate.push(`${path}?tab=case-study`)
          : navigate.push("?tab=case-study")
      }
      className="bg-brand-second border border-gray-500/5 w-[165px] h-[47px] hover:bg-brand-main/80 text-black px-6 py-3 rounded-lg flex items-center gap-2"
    >
      Case Study
      <ArrowUpRight />
    </Button>
  );
}
