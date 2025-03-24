"use client";

import { Code2 } from "lucide-react";
import Link from "next/link";

import Github from "@/components/icons/github-icon";
import X from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { foundlyLink, githubLink, twitterLink } from "@/content/socials";

import { Logo } from "./logo";

export const Header = () => {
  return (
    <div className="bg-background sticky top-0 z-10 flex w-screen flex-col gap-2">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-2 p-2">
            <Logo className="size-8 rounded-md" />
            <h1 className="text-2xl font-bold">
              glowww
              <span className="text-muted-foreground text-sm font-light">
                .dev
              </span>
            </h1>
          </div>

          <div className="tex hidden items-center gap-2 pr-2 md:flex">
            <Separator orientation="vertical" className="h-12" />

            <Link href={githubLink} target="_blank">
              <Button variant="ghost">
                <Github /> @glowww
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <Link href={twitterLink} target="_blank">
              <Button variant="ghost">
                <X /> @foundlylabs
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <Link href={foundlyLink} target="_blank">
              <Button variant="ghost">
                <Code2 /> foundly.dev
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <ColorModeToggle />
          </div>

          <div className="flex items-center gap-2 pr-2 md:hidden">
            <Separator orientation="vertical" className="h-12" />

            <Link href={githubLink} target="_blank">
              <Button variant="ghost" size="icon">
                <Github />
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <Link href={twitterLink} target="_blank">
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <Link href={foundlyLink} target="_blank">
              <Button variant="ghost" size="icon">
                <Code2 />
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <ColorModeToggle />
          </div>
        </div>

        <Separator />

        <div className="flex flex-col p-2 pb-0">
          <div className="text-muted-foreground line-clamp-1 flex gap-1 text-sm">
            Tools & resources to make your designs glowww.
          </div>

          <p className="text-muted-foreground text-sm">
            This is an open source project by{" "}
            <Link
              href={foundlyLink}
              className="text-primary font-medium hover:underline"
              target="_blank"
            >
              Foundly
            </Link>
            . For contributions or change requests, head to{" "}
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
      </div>
      <Separator />
    </div>
  );
};
