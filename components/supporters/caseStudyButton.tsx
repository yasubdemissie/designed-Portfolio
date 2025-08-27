"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function CaseStudyButton() {
  const navigate = useRouter();
  return (
    <Button
      onClick={() => {
        navigate.push(`?tab=case-study`);
      }}
      variant="outline"
    >
      Case study
    </Button>
  );
}
