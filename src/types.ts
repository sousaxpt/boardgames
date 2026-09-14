export interface Store {
  name: string;
  buildUrl(game: string): string;
}
