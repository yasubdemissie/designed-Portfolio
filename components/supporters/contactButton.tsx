"use client";
import { ArrowBigRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ContactButton() {
  return (
    <Button
      variant={"contact"}
      onClick={() => alert("Button Clicked!")}
      className="flex gap-x-4 px-2"
    >
      <ArrowBigRightIcon />
      Get in Touch
    </Button>
  );
}
