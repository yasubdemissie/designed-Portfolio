"use client";
import {
  ArrowBigRightIcon,
  ArrowRight,
  ArrowRightCircleIcon,
} from "lucide-react";
import { Button } from "../ui/button";

export function ContactButton() {
  return (
    <Button
      variant={"contact"}
      onClick={() => alert("Button Clicked!")}
      className="flex relative group gap-x-4 w-[200px]"
    >
      <span className="rounded-full duration-200 ease-in-out group-hover:translate-x-[50px] bg-white/90 p-1 w-fit">
        <ArrowRight color="black" />
      </span>
      <span className="group-hover:hidden">Get in Touch</span>
      <span className="absolute  duration-300 ease-in-out right-[80px] hidden group-hover:block">
        Contact me
      </span>
    </Button>
  );
}
