import { Source } from "./sources";

export const tags = ["Illustration", "UI Kit", "Icon", "Font"] as const;
export type Tag = (typeof tags)[number];

export interface Item {
  /**
   * Unique identifier for the item. Also used as the URL slug.
   */
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    href?: string;
  };
  href: string;
  image: string;
  tags: Tag[];
  socials?: {
    x?: string;
    website?: string;
    github?: string;
  };
  /**
   * If a source is defined, this implies that the item is embedded in another site.
   * e.g an SVG pack might be from a Figma community library.
   */
  source?: Source;
  /**
   * The date the item was added to the database.
   */
  dateAdded: Date;
}
