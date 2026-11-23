// SPDX-License-Identifier: MIT
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line about the dumbest thing my agent did today: a confident
// answer to a question nobody asked, with the punch at the end.
const LINE =
  "I asked for the lunch menu; it confidently announced the office was closed for a holiday nobody had heard of, then emailed the whole team to go home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back self-check: the gate needs 1-200 characters, not only
// whitespace, so re-read what was written and verify it before exiting.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${written.length} characters`);
}
