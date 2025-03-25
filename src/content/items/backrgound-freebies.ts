import { Item } from "../schema";
import { figma } from "../sources";

export const backgroundFreebies: Item = {
  id: "background-freebies",
  title: "Background Freebies",
  description: "Free abstract high-resolution images",
  href: "https://www.figma.com/community/file/1259460905847316928",
  author: {
    name: "codetoform",
    href: "https://www.figma.com/@codetoform",
  },
  image: "/items/background-freebies.jpeg",
  tags: ["Backgrounds"],
  source: figma,
  dateAdded: new Date("2025-03-24"),
};
