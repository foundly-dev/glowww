import Image from "next/image";
import Link from "next/link";

import Github from "@/components/icons/github-icon";
import { Separator } from "@/components/ui/separator";
import { foundlyLink, githubLink, mfbevanTwitterLink } from "@/content/socials";

import { Header } from "../_components/landing/header";
import { Logo } from "../_components/landing/logo";

export default function InfoPage() {
  return (
    <main className="flex flex-col">
      <Header search={false} />

      <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-2 p-4 pt-20">
        <Image
          src="/design.svg"
          alt="glowww design"
          unoptimized
          width={300}
          height={300}
          className="object-cover"
        />

        <h2 className="flex w-full items-center gap-2 text-2xl font-bold">
          <Logo className="inline-block size-8" />
          glowww.dev
        </h2>
        <Separator />

        <div className="text-muted-foreground text-sm">
          Over the years, I have collected a lot of design and developer
          resources. This is a curated collection of them to help make your
          projects{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text font-bold text-transparent">
            glowww
          </span>
          . This is an open source project developed by{" "}
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

        <div className="text-muted-foreground text-sm">
          The rights to all of the content on this site belong to the original
          authors. If you are the author of any content on this site and would
          like it removed, please submit a{" "}
          <Link
            href={githubLink}
            className="text-primary font-medium hover:underline"
            target="_blank"
          >
            Pull Request or Git Issue.
          </Link>
        </div>
      </div>
    </main>
  );
}
