import { Item } from "../schema";
import { figma } from "../sources/figma";

export const androidUiKit: Item = {
  id: "android-ui-kit",
  title: "Android UI Kit",
  description:
    "Get started designing for Android faster and easier with an introductory guide, styles, components, and system templates. Includes templates for Android system UI features: Notifications, Widgets, System bars and device frames, Camera, Bubbles and shortcuts",
  author: {
    name: "Android Design",
    href: "https://www.figma.com/@androiddesign",
  },
  href: "https://www.figma.com/community/file/1478523627015571873",
  source: figma,
  tags: ["UI Kits"],
  image: "/items/android-ui-kit.jpeg",
  dateAdded: new Date("2025-03-23"),
};
