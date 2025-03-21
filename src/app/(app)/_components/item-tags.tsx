"use client";

import { Button } from "@/components/ui/button";
import { tags as allTags, Tag } from "@/content/schema";

import { useItemSearch } from "./item-search.provider";

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
            variant={isActive ? "default" : "outline"}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </Button>
        );
      })}

      <Button variant="ghost" onClick={() => setTags([])}>
        Clear
      </Button>
    </div>
  );
};
