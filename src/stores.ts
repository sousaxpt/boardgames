import type { Store } from "./types";

export const stores: Store[] = [
  {
    name: "Zatu",

    buildUrl(game: string) {
      return `https://zatu.com/search?options%5Bprefix%5D=last&q=${encodeURIComponent(game)}&sort_by=relevance&filter.v.availability=1`;
    },
  },

  {
    name: "Philibert",

    buildUrl(game: string) {
      return `https://www.philibertnet.com/en/search?search_query=${encodeURIComponent(game)}`;
    },
  },
];
