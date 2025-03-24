# ✨ Glowww

Tools & resources to make your designs glowww. This is an open source project by [Foundly](https://foundly.dev)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributions

If you think we've missed something or would like something changed, feel free to fork this repository and make a Pull Request, or open a Git Issue with the relevant details.

### New Additions

- Ensure that the resource doesn't already exist
- Create a new file in `src/content/items/` with a name that represents your resource (e.g., `your-resource-name.ts`)
- Follow the Item schema structure as shown in the example below:

  ```typescript
  import { Item } from "../schema";

  export const yourResourceName: Item = {
    id: "unique-id", // Unique identifier for the resource
    title: "Resource Title", // Name of the resource
    description:
      "A detailed description of what this resource offers and why it's useful.",
    author: {
      name: "Author Name", // Creator of the resource
      href: "https://link-to-author-profile", // Optional link to author profile
    },
    image: "/items/your-image.png", // Path to resource thumbnail
    tags: ["Category1", "Category2"], // Categorization tags
    href: "https://link-to-resource", // URL to the resource
    socials: {
      x: "https://x.com/author-handle", // Optional social links
      // Other social platforms as needed
    },
    source: // e.g if this is an item embedded in another site such as the Figma community
    dateAdded: new Date("YYYY-MM-DD"), // When this resource was added
  };
  ```

- Add your resource to the items array in `src/content/items/index.ts`:

  ```typescript
  import { yourResourceName } from "./your-resource-name";
  // ... other imports

  export const items = [
    // ... existing items
    yourResourceName,
  ];
  ```

- Include a representative image for your resource in the `public/items/` directory
- Make sure all links are functional and the description accurately represents the resource
- Run the app locally before submitting your request. If the build fails, we can't promise that your content will be added
