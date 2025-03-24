import {
  Bot,
  Code2,
  ImageIcon,
  LayoutDashboardIcon,
  Shapes,
  Sparkles,
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
      Illustrations: ImageIcon,
      "UI Kits": LayoutDashboardIcon,
      Icons: Shapes,
      Fonts: Type,
      Components: Code2,
      AI: Bot,
      Inspiration: Sparkles,
    }[tag] ?? TagIcon
  );
};
