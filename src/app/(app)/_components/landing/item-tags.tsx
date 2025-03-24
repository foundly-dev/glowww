"use client";

import { Check, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { tags as allTags, Tag } from "@/content/schema";
import { cn } from "@/lib/utils";

import { ItemTagIcon } from "../items/item-tag-icon";
import { useItemSearch } from "../store/item-search.provider";

export const ItemTags = () => {
  const { tags, setTags } = useItemSearch();

  const onTagClick = (tag: Tag) => {
    setTags(
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag],
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag) => {
        const isActive = tags.includes(tag);

        return (
          <Button
            key={tag}
            size="sm"
            variant={isActive ? "default" : "outline"}
            onClick={() => onTagClick(tag)}
            className="relative"
          >
            <ItemTagIcon
              tag={tag}
              className={cn(
                "absolute left-2 h-4 w-4 transition-all duration-300 ease-in-out",
                isActive ? "rotate-180 opacity-0" : "opacity-100",
              )}
            />
            <Check
              className={cn(
                "absolute left-2 h-4 w-4 transition-all duration-300 ease-in-out",
                isActive ? "opacity-100" : "-rotate-180 opacity-0",
              )}
            />
            <span className="ml-5">{tag}</span>
          </Button>
        );
      })}

      <Button size="sm" variant="ghost" onClick={() => setTags([])}>
        <XIcon className="h-4 w-4" />
        Clear
      </Button>
    </div>
  );
};
