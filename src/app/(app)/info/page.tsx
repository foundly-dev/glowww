import Link from "next/link";

import Github from "@/components/icons/github-icon";
import { foundlyLink, githubLink, mfbevanTwitterLink } from "@/content/socials";

import { Header } from "../_components/landing/header";

export default function InfoPage() {
  return (
    <main className="flex flex-col">
      <Header search={false} />

      <div className="flex flex-col p-4">
        <div className="text-muted-foreground text-sm">
          A curated collection of design and developer resources to make your
          projects{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text font-bold text-transparent">
            glowww
          </span>
          .<br className="hidden md:block" />
          This is an open source project developed by{" "}
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
          like it removed, please submit a pull request or Git Issue.
        </div>
      </div>
    </main>
  );
}
