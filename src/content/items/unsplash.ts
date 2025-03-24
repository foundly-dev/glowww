import { Item } from "../schema";

export const unsplash: Item = {
  id: "unsplash",
  title: "Unsplash",
  description:
    "Over 6 million free high-resolution photos and illustrations brought to you by the world’s most generous community of contributors.",
  author: {
    name: "Unsplash",
  },
  tags: ["Images", "Illustrations"],
  href: "https://unsplash.com/",
  image: "/items/unsplash.png",
  socials: {
    x: "https://x.com/unsplash",
  },
  dateAdded: new Date("2025-03-24"),
};
