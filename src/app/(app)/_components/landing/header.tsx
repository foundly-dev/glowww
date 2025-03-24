"use client";

import { Info } from "lucide-react";
import Link from "next/link";

import Github from "@/components/icons/github-icon";
import X from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
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
          <Link href="/">
            <div className="flex items-center gap-2 p-2">
              <Logo className="size-8 rounded-md" />
              <h1 className="text-2xl font-bold">
                glowww
                <span className="text-muted-foreground text-sm font-light">
                  .dev
                </span>
              </h1>
            </div>
          </Link>

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

            <Link href="/info" className="text-muted-foreground">
              <Button variant="ghost" size="icon">
                <Info />
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

            <Link href="/info" className="text-muted-foreground">
              <Button variant="ghost" size="icon">
                <Info />
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-12" />

            <ColorModeToggle />
          </div>
        </div>

        <Separator />
      </div>
    </div>
  );
};
