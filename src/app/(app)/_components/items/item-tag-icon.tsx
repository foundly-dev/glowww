import {
  Bot,
  Boxes,
  Code2,
  Grid3X3,
  ImageIcon,
  PenTool,
  Presentation,
  Shapes,
  Sparkles,
  TabletSmartphone,
  TriangleDashed,
  Type,
} from "lucide-react";
import { TagIcon } from "lucide-react";

import { Tag } from "@/content/schema";
import { cn } from "@/lib/utils";

export const ItemTagIcon = ({
  tag,
  className,
}: {
  tag: Tag;
  className?: string;
}) => {
  const Icon = itemTagIcon(tag);

  return <Icon className={cn(className)} />;
};

export const itemTagIcon = (tag: Tag) => {
  return (
    {
      "3D": Boxes,
      Backgrounds: Grid3X3,
      Illustrations: PenTool,
      "UI Kits": TabletSmartphone,
      Icons: Shapes,
      Images: ImageIcon,
      Fonts: Type,
      Components: Code2,
      AI: Bot,
      Inspiration: Sparkles,
      Presentations: Presentation,
      Logos: TriangleDashed,
    }[tag] ?? TagIcon
  );
};
