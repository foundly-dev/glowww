import { Item } from "../schema";

export const three: Item = {
  id: "three",
  title: "Three.js",
  description:
    "Three.js allows the creation of GPU-accelerated 3D animations using the JavaScript language as part of a website without relying on proprietary browser plugins.",
  href: "https://threejs.org/",
  image: "/items/three.png",
  tags: ["3D"],
  author: {
    name: "mrdoob",
    href: "https://x.com/mrdoob",
  },
  socials: {
    x: "https://x.com/threejs",
    github: "https://github.com/mrdoob/three.js/",
  },
  dateAdded: new Date("2025-03-25"),
};
