import { Item } from "../schema";

export const dribble: Item = {
  id: "dribble",
  title: "Dribbble",
  description:
    "Dribbble is a community of designers and developers who share their work and get inspired by each other.",
  author: {
    name: "Dribbble",
  },
  href: "https://dribbble.com/",
  tags: ["Inspiration"],
  image: "/items/dribble.jpeg",
  socials: {
    x: "https://x.com/dribbble",
  },
  dateAdded: new Date("2025-03-24"),
};
