import { Item } from "../schema";

export const publicWork: Item = {
  id: "public-work",
  title: "Public Work",
  description:
    "Public Work is a search engine for public domain content. Explore 100,000+ copyright-free images from The MET, New York Public Library, and other sources.",
  author: {
    name: "Cosmos",
  },
  image: "/items/public-work.png",
  tags: ["Illustrations", "Inspiration"],
  href: "https://public.work/",
  socials: {
    // Add social links if available
  },
  dateAdded: new Date("2025-03-24"),
};
