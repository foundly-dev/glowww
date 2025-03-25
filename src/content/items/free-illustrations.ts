import { Item } from "../schema";
import { figma } from "../sources";

export const freeIllustrations: Item = {
  id: "free-illustrations",
  title: "Free Illustrations",
  description:
    "✨ 99 free illustrations ✨ for personal and commercial projects. All doodles are customizable, just play around with the variations using the Blush plugin until you create the art that tells your story.",
  href: "https://www.figma.com/community/file/962312625136723705",
  image: "/items/free-illustrations.jpeg",
  tags: ["Illustrations"],
  source: figma,
  author: {
    name: "Blush",
    href: "https://www.figma.com/@blush",
  },
  dateAdded: new Date("2025-03-24"),
};
