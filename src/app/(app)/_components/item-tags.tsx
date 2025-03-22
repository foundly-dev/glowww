"use client";

import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { tags as allTags, Tag } from "@/content/schema";

import { useItemSearch } from "./item-search.provider";
import { ItemTagIcon } from "./item-tag-icon";

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
          >
            <ItemTagIcon tag={tag} />
            {tag}
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
