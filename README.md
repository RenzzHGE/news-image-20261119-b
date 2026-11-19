# 19 November 2026 — World News in One Image

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/RenzzHGE/news-image-20261119-b/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/RenzzHGE/news-image-20261119-b/reward.svg)](https://make.fun/bounty/news-image-20261119)

Entry for the [news-image-20261119](https://make.fun/bounty/news-image-20261119) competition on make.fun: "Sum up 19 November's world news in one image".

## The image

A 2×2 collage (1024×1024) — one panel per top story of Thursday 19 November 2026:

1. **SUMMIT IN SHENZHEN** — Trump, Xi and Putin meet in Shenzhen, China, for a trilateral summit.
2. **GTA VI LAUNCHES** — Grand Theft Auto VI begins its global rollout after a 13-year wait.
3. **45BN FOR UKRAINE** — the EU proposes a €45 billion loan for Ukraine as the war grinds on.
4. **VOYAGER 1: ONE LIGHT-DAY** — NASA's Voyager 1 reaches one light-day from Earth, almost 50 years after launch.

## How it is built

`main.ts` (Node 22, no dependencies, no network) deterministically copies `entry.png` to `/output/entry.png`. Running it twice writes identical bytes.

```
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
