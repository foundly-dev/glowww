"use client";

import { ReactTyped } from "react-typed";

import { Separator } from "@/components/ui/separator";

import { Logo } from "./logo";

export const Hero = () => {
  return (
    <div className="bg-background fixed z-10 flex h-27 w-screen flex-col gap-2 md:h-38">
      <div className="flex flex-col gap-2 p-4 pb-2 md:p-8 md:pb-4">
        <div className="flex items-center gap-2">
          <Logo className="size-12" />
          <h1 className="text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-tr from-amber-300 to-orange-600 bg-clip-text font-bold text-transparent">
              Glowww
            </span>
          </h1>
        </div>

        <div className="line-clamp-1 flex gap-1 text-sm md:text-lg">
          Tools & resources to make your{" "}
          <ReactTyped
            className="font-extrabold text-amber-500"
            smartBackspace={false}
            shuffle
            strings={[
              "designs",
              "projects",
              "websites",
              "portfolio",
              "ideas",
              "applications",
              "games",
            ]}
            loop
            typeSpeed={50}
            backSpeed={20}
          />
          glowww.
        </div>
      </div>
      <Separator />
    </div>
  );
};
