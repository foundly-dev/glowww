import { Item } from "../schema";

export const svgl: Item = {
  id: "svgl",
  title: "SVGL",
  description:
    "A beautiful library with SVG logos. Built with Sveltekit & Tailwind CSS.",
  author: {
    name: "Pablo",
    href: "https://pheralb.dev/",
  },
  image: "/items/svgl.png",
  tags: ["Icons"],
  href: "https://svgl.app/",
  socials: {
    x: "https://x.com/pheralb_",
    github: "https://github.com/pheralb/svgl",
    website: "https://pheralb.dev/",
  },
  dateAdded: new Date("2025-03-23"),
};
