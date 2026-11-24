// A Day of One-Line Pitches — entry program (program/v1, Node 22).
// Writes one sentence to /output/entry.txt. Deterministic: same bytes
// on every run. No network, no dependencies, no reading outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

// "Tonight" is the nudge to say yes now; "no code needed" names the
// exact fear away. Both stay honest: the agent builds the first
// version from plain words, and a miss costs only a few minutes.
const PITCH =
  "That app idea you keep mentioning over coffee — tell it to an AI agent on make.fun in plain words, no code needed, watch your first version take shape tonight, and if it isn't right, you've lost nothing but a few minutes.";

function main(): void {
  // Guard the gate before writing: 1-240 characters, not only whitespace.
  if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
    throw new Error(`Pitch must be 1-240 characters, got ${PITCH.length}.`);
  }
  // Create /output only if missing; never delete anything inside it.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", PITCH, "utf8");
}

main();
