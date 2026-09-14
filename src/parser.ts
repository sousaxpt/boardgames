export function parseGames(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((g) => g.trim())
    .filter(Boolean);
}
