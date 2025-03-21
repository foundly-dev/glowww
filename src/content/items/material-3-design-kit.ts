import { Item } from "../schema";
import { figma } from "../sources/figma";

export const material3DesignKit: Item = {
  id: "material-3-design-kit",
  title: "Material 3 Design Kit",
  description: "A design kit for Material 3",
  author: {
    name: "Material Design",
    href: "https://www.figma.com/@materialdesign",
  },
  href: "https://www.figma.com/community/file/1035203688168086460",
  source: figma,
  image: "/images/material-3-design-kit.png",
  tags: ["UI Kit"],
};
