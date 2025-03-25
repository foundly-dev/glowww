"use client";

import { Search, X } from "lucide-react";
import { useState, useRef, useEffect, useCallback, FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { useItemSearch } from "../store/item-search.provider";

export interface ItemSearchProps {
  forceOpen?: boolean;
  containerClassName?: string;
  inputClassName?: string;
}

export const ItemSearch: FC<ItemSearchProps> = ({
  forceOpen,
  containerClassName,
  inputClassName,
}) => {
  const [isOpen, setIsOpen] = useState(forceOpen || false);
  const { search, setSearch } = useItemSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    if (!forceOpen) {
      setIsOpen(false);
    }
    setSearch("");
  }, [setSearch, forceOpen]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (forceOpen) return;
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (search && !isOpen) {
      onOpen();
    }
  }, [search, isOpen, onOpen]);

  useEffect(() => {
    if (forceOpen) return;
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpen, onClose, isOpen, forceOpen]);

  return (
    <div className="relative flex items-center">
      <div
        className={cn(
          "flex items-center transition-all duration-200 ease-in-out",
          isOpen ? "w-[200px]" : "w-0 overflow-hidden opacity-0",
          containerClassName,
        )}
      >
        <div className="relative w-full">
          <Search className="text-muted-foreground absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={onSearch}
            onKeyDown={handleKeyDown}
            className={cn("bg-background w-full pl-10", inputClassName)}
            disabled={!isOpen}
          />
          <X
            onClick={onClose}
            className="text-muted-foreground absolute top-1/2 right-2 z-10 size-4 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpen}
            className={cn(
              "transition-all duration-200 ease-in-out",
              isOpen ? "w-0 scale-0 opacity-0" : "scale-100 opacity-100",
            )}
          >
            <Search className="text-muted-foreground size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Search (⌘K)</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
