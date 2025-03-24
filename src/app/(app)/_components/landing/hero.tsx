"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";

import Github from "@/components/icons/github-icon";
import X from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { foundlyLink, githubLink, twitterLink } from "@/content/socials";

import { Logo } from "./logo";

export const Hero = () => {
  return (
    <div className="bg-background sticky top-0 z-10 flex w-screen flex-col gap-2">
      <div className="flex flex-col gap-2 p-4 pb-2 md:p-8 md:pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Logo className="size-12" />
            <h1 className="text-5xl font-bold md:text-6xl">
              <span className="bg-gradient-to-tr from-amber-300 to-orange-600 bg-clip-text font-bold text-transparent">
                Glowww
              </span>
              <span className="text-muted-foreground text-sm font-light">
                .dev
              </span>
            </h1>
          </div>

          <div className="flex items-center">
            <Link href={githubLink} target="_blank">
              <Button variant="ghost" size="icon">
                <Github />
              </Button>
            </Link>
            <Link href={twitterLink} target="_blank">
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </Link>
          </div>
        </div>

        <div className="line-clamp-1 flex gap-1 text-sm md:text-lg">
          Tools & resources to make your{" "}
          <ReactTyped
            className="font-extrabold text-amber-500"
            smartBackspace={false}
            strings={[
              "projects",
              "websites",
              "portfolio",
              "ideas",
              "applications",
              "designs",
            ]}
            typeSpeed={50}
            backSpeed={20}
          />
          glowww.
        </div>

        <p className="text-muted-foreground text-sm">
          An open source project by{" "}
          <Link
            href={foundlyLink}
            className="text-primary font-medium hover:underline"
            target="_blank"
          >
            Foundly
          </Link>
          . For contributions, check out{" "}
          <Link
            href={githubLink}
            className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
            target="_blank"
          >
            <Github className="size-3" />
            foundly-dev/glowww
          </Link>
          .
        </p>
      </div>
      <Separator />
    </div>
  );
};
