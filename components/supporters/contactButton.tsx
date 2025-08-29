"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useContactContext } from "./context";

export function ContactButton() {
  const { setIsOverlayOpen } = useContactContext();

  return (
    <>
      <Button
        variant={"contact"}
        onClick={() => setIsOverlayOpen(true)}
        className="flex relative group gap-x-4 w-[243px] h-[44px]"
      >
        <span className="rounded-full duration-400 ease-in-out group-hover:translate-x-[50px] bg-white/90 p-1 w-fit">
          <ArrowRight color="black" />
        </span>
        <span className="group-hover:hidden text-[16px] font-medium">
          Get in Touch
        </span>
        <span className="absolute delay-500 duration-[2000ms] ease-in-out right-[100px] hidden group-hover:block text-[16px] font-medium">
          Contact me
        </span>
      </Button>
    </>
  );
}
