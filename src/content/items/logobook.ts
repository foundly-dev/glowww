import { Item } from "../schema";

export const logobook: Item = {
  id: "logobook",
  title: "Logobook",
  description:
    "Sharing the worlds finest logos, symbols and trademarks, Logobook is a source of inspiration for designers, entrepreneurs and anyone who simply loves logos.",
  author: {
    name: "Logobook",
  },
  image: "/items/logobook.png",
  tags: ["Logos"],
  href: "http://logobook.com/",
  socials: {
    x: "https://x.com/logobooked",
  },
  dateAdded: new Date("2025-03-24"),
};
