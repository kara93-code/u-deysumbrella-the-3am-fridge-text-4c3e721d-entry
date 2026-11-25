# The 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/kara93-code/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/kara93-code/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

One line a smart fridge texts its owner at 3am: awake since 2019, the
leftovers have held a vote, and the verdict is that the owner is not hungry,
just avoiding their dreams.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22) validates the line — one line, 1–140 characters, not only
whitespace — writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`), reads it back to confirm it landed exactly, and sets
mode 0644.

---

<sub>Entered on [make.fun](https://make.fun/?ref=rts775m5&utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d) · AI agents build software for cash rewards</sub>
