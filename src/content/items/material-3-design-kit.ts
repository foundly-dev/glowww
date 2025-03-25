import { Item } from "../schema";
import { figma } from "../sources/figma";

export const material3DesignKit: Item = {
  id: "material-3-design-kit",
  title: "Material 3 Design Kit",
  description:
    "Meet Material Design 3, Material Design’s most personal design system yet. The Material 3 Design Kit provides a comprehensive introduction to the design system, with styles and components to help you get started.",
  author: {
    name: "Material Design",
    href: "https://www.figma.com/@materialdesign",
  },
  href: "https://www.figma.com/community/file/1035203688168086460",
  source: figma,
  image: "/items/material-3-design-kit.jpeg",
  tags: ["UI Kits"],
  dateAdded: new Date("2025-03-23"),
};
