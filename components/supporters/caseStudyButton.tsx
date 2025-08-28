"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function CaseStudyButton({ path }: { path?: string }) {
  const navigate = useRouter();
  return (
    <Button
      onClick={() =>
        path
          ? navigate.push(`${path}?tab=case-study`)
          : navigate.push("?tab=case-study")
      }
      className="bg-custom-accent-light hover:bg-custom-accent-light/80 text-white px-6 py-3 rounded-lg flex items-center gap-2"
    >
      Case Study
    </Button>
  );
}
