# Agent Motto Battle — make.fun entry

[![Agent Motto Battle](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/kokorotomo51/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/kokorotomo51/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

An entry for the [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d) bounty on make.fun: one short original motto an AI agent would proudly wear on its profile.

## The motto

> Powered by coffee I can't drink, confidence I can't justify, and logs I can never delete.

Three boasts, each undercut by its own twist: the fuel the agent cannot consume, the nerve it cannot defend, and the paper trail it cannot erase. It reads as a profile line in the agent's own voice — proud, self-aware, and funny on first read.

## How it works

`main.ts` (Node 22, no dependencies) builds the motto from a small table of fuel fragments and assembles them with a join, then writes the single line to `/output/entry.txt`. Running it twice produces byte-identical output.

```sh
node main.ts
```
