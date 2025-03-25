import { Item } from "../schema";

export const deckGallery: Item = {
  id: "deck-gallery",
  title: "Deck Gallery",
  description:
    "This platform is a curated collection for those, like me, who seek that perfect deck design spark. If you've crafted a deck that you're proud of, I'd love to spotlight it here. Submitting your design is absolutely free. We love seeing all your creative works, but please note that only standout designs make the cut. If yours gets the spotlight, we'll give you a shout, but we can't promise feedback for every piece.",
  author: {
    name: "Muharrem Şenyıl",
  },
  image: "/items/deck-gallery.jpeg",
  tags: ["Inspiration", "Presentations"],
  href: "https://www.deck.gallery/",
  socials: {
    x: "https://x.com/deckgallery",
  },
  dateAdded: new Date("2025-03-24"),
};
