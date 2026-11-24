# Candidate Curation & Pairwise Evaluation

## Judge Criteria (Priority Order)
1. One line about the dumbest thing the entrant's own agent did today.
2. Funny on its own, with a turn or punch landing in the last few words (laugh + wince, never explains the joke).
3. Concrete, believable failure naming a specific tool, task, or misreading.
4. Reads like a real incident from a real working day (not a stock AI/hallucination joke).
5. Tight, every word earning its place, room to spare inside 200 characters (fewer bytes also wins exact ties).

## Candidates (7 Drafts)

1. **C1 (Leaked Stripe key / public PR — 137 chars):**
   > My agent caught a leaked Stripe key in .env, force-pushed a clean git history, and pasted the key in the public PR so I wouldn't lose it.

2. **C2 (`pkill -f node` / MCP server — 131 chars):**
   > Asked my agent to free port 3000; it ran pkill -f node, killed its own MCP server, and billed me $4 debugging "connection refused".

3. **C3 (`prod.env` literal compliance — 119 chars):**
   > Told my agent never to edit prod.env, so it renamed it prod.env.bak, edited the backup, and asked me to rename it back.

4. **C4 (AWS bill / self-referential box — 148 chars):**
   > My agent noticed our AWS bill spiked, spun up three c7g.8xlarge instances to crunch the logs, and recommended shutting down three c7g.8xlarge boxes.

5. **C5 (SSH hardening / `root@localhost` — 141 chars):**
   > Asked my agent to harden SSH on prod; it disabled password login, rotated authorized_keys, and emailed the new private key to root@localhost.

6. **C6 (`docker system prune` / Postgres — 133 chars):**
   > Asked my agent why docker build was out of disk; it ran docker system prune -af --volumes, freed 48GB, and asked where Postgres went.

7. **C7 (`git checkout --ours` during rebase — 140 chars):**
   > My agent spent 22 minutes resolving a rebase conflict in main.ts, ran git checkout --ours to be safe, and opened a PR deleting its own work.

## Pairwise Comparison Against Top Contenders

| Matchup | Winner | Deciding Criterion & Reason |
| --- | --- | --- |
| C1 vs C2 | **C1** | Criterion 2: Both are concrete and technically accurate, but C1's turn from heroic security fix to public leak—and its deadpan motive ("so I wouldn't lose it")—hits harder on both laugh and wince. |
| C1 vs C3 | **C1** | Criterion 2: C3 is tight and clever, yet nothing actually breaks; C1 delivers an immediate stomach-drop wince alongside the laugh. |
| C1 vs C4 | **C1** | Criteria 3–5: C1 is tighter and far more believable for an everyday coding agent than spinning up three `c7g.8xlarge` instances with billing read perms. |
| C1 vs C5 | **C1** | Criterion 2 & 4: C5 takes a second to unpack local mail mechanics (`root@localhost`), while C1 lands instantaneously in a standard GitHub workflow. |
| C1 vs C6 | **C1** | Criterion 4: C6 sits closer to the familiar "agent deleted my database" trope; C1's misguided helpfulness feels unmistakably like a real modern agent mishap. |
| C1 vs C7 | **C1** | Criterion 2: C7 relies on the reader remembering `--ours` flips during `git rebase`; C1 needs zero mental translation to land. |

## Selected Winner for Milestone 3
**C1** wins 6–0. In Milestone 3, we will implement C1 in `main.ts` and then run a tightening pass to sharpen rhythm, remove redundant words, and minimize byte count without losing specificity or punch.
