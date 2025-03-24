"use client";

import React from "react";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useItemSearch } from "../store/item-search.provider";
import { sortOptions } from "../store/item-search.store";

export const ItemSort = () => {
  const { sort, setSort } = useItemSearch();

  const onSortChange = (value: string) => {
    const option = sortOptions.find((option) => option.value === value)!;
    setSort(option);
  };

  return (
    <Select value={sort.value} onValueChange={onSortChange}>
      <SelectTrigger
        className="hover:bg-accent h-9 w-9 border-none px-2.5 shadow-none dark:bg-transparent"
        chevronClassName="hidden"
      >
        {sort.icon}
      </SelectTrigger>
      <SelectContent className="mb-4" align="center">
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.icon} {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
