import fs from "fs";
import { parseGames } from "./parser";
import { createHtml } from "./template";

const text = fs.readFileSync("games.txt", "utf8");
const games = parseGames(text);
const html = createHtml(games);

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.writeFileSync("dist/boardgames.html", html, "utf8");

console.log("✔ dist/boardgames.html criado");
