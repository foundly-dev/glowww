"use client";

import Link from "next/link";

import Github from "@/components/icons/github-icon";
import X from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  foundlyLink,
  githubLink,
  foundlyTwitterLink,
  mfbevanTwitterLink,
} from "@/content/socials";

import { Logo } from "./logo";

export const Header = () => {
  return (
    <div className="bg-background sticky top-0 z-10 flex w-screen flex-col gap-2">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 p-2">
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

            <Link href={foundlyTwitterLink} target="_blank">
              <Button variant="ghost">
                <X /> @foundlylabs
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <Link href={mfbevanTwitterLink} target="_blank">
              <Button variant="ghost">
                <X /> @0xmfbevan
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

            <Link href={mfbevanTwitterLink} target="_blank">
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <ColorModeToggle />
          </div>
        </div>

        <Separator />

        <div className="flex flex-col p-2 pb-0">
          <div className="text-muted-foreground text-sm">
            A curated collection of design and developer resources to make your
            projects{" "}
            <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text pl-1 font-bold text-transparent">
              glowww
            </span>
            .<br className="hidden md:block" /> This is an open source project
            developed by{" "}
            <Link
              href={mfbevanTwitterLink}
              className="text-primary font-medium hover:underline"
              target="_blank"
            >
              mfbevan
            </Link>{" "}
            and{" "}
            <Link
              href={foundlyLink}
              className="text-primary font-medium hover:underline"
              target="_blank"
            >
              Foundly Labs
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
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};
