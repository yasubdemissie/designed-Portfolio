"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function BackButton() {
  const navigate = useRouter();
  return (
    <Button
      variant="outline"
      className="rounded-full border-0 bg-custom-accent-dark/10"
      onClick={() => navigate.back()}
    >
      <ArrowLeft />
    </Button>
  );
}
