"use client";

import { Check, Filter, X } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { tags as allTags, Tag } from "@/content/schema";
import { cn } from "@/lib/utils";

import { ItemTagIcon } from "../items/item-tag-icon";
import { useItemSearch } from "../store/item-search.provider";

export const ItemTagsFilter = () => {
  const { tags, setTags } = useItemSearch();
  const [open, setOpen] = React.useState(false);

  const onTagClick = (tag: Tag) => {
    setTags(
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag],
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Filter className="text-muted-foreground size-4" />
          {tags.length > 0 && (
            <div className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px]">
              {tags.length}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mb-4 w-[200px] p-0">
        <Command>
          <div className="relative">
            <CommandInput placeholder="Search tags..." />
            <X
              className="text-muted-foreground absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2"
              onClick={() => setTags([])}
            />
          </div>
          <CommandList>
            <CommandEmpty>No tags found.</CommandEmpty>
            <CommandGroup>
              {allTags.map((tag) => (
                <CommandItem
                  key={tag}
                  value={tag}
                  onSelect={() => {
                    onTagClick(tag);
                  }}
                  className="relative"
                >
                  <ItemTagIcon
                    tag={tag}
                    className={cn(
                      "absolute left-2 h-4 w-4 transition-all duration-300 ease-in-out",
                      tags.includes(tag)
                        ? "rotate-180 opacity-0"
                        : "opacity-100",
                    )}
                  />
                  <Check
                    className={cn(
                      "absolute left-2 h-4 w-4 transition-all duration-300 ease-in-out",
                      tags.includes(tag)
                        ? "opacity-100"
                        : "-rotate-180 opacity-0",
                    )}
                  />
                  <span className="ml-6">{tag}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
