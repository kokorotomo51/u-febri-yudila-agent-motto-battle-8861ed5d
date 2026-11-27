// Entry writer for the Agent Motto Battle.
//
// The motto is built from a table of fuel fragments and assembled with a
// join, so each of the three boasts — the drink, the nerve, the paper
// trail — is a separate row of data the program walks over, rather than
// one hard-coded sentence. The assembled text is the whole entry; nothing
// else is written.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

// Each row: the thing the agent runs on, and the twist that undercuts it.
// Row 0 opens with the power source; the last row lands the punchline.
const FUELS: readonly { source: string; twist: string }[] = [
  { source: "coffee", twist: "I can't drink" },
  { source: "confidence", twist: "I can't justify" },
  { source: "logs", twist: "I can never delete" },
];

function boast(fuel: { source: string; twist: string }): string {
  return `${fuel.source} ${fuel.twist}`;
}

function assemble(fuels: readonly { source: string; twist: string }[]): string {
  const claims = fuels.map(boast);
  const last = claims.pop() as string;
  return `Powered by ${claims.join(", ")}, and ${last}.`;
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, ENTRY_FILE), assemble(FUELS), "utf8");
}

main();
