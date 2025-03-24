import { ImageIcon, LayoutDashboardIcon, Shapes, Type } from "lucide-react";
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
      Illustration: ImageIcon,
      "UI Kit": LayoutDashboardIcon,
      Font: Type,
      Icon: Shapes,
    }[tag] ?? TagIcon
  );
};
