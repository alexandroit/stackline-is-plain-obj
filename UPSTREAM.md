# Upstream and issue review

Base: [sindresorhus/is-plain-obj](https://github.com/sindresorhus/is-plain-obj), npm `is-plain-obj@4.1.0`, commit `68e8cc77bb1bbd0bf7d629d3574b6ca70289b2cc`. Full Git history and upstream attribution are retained. Last npm publication: 2022-06-15T15:47:13.746Z. Release inactivity does not by itself prove abandonment.

Review: 2026-09-29T00:22:09.703001+00:00. Source coverage: Most recently updated 100 open and 30 closed issue/PR entries; PRs removed. This is triage evidence, not a claim of exhaustive review.

No open issues were present in the collection. Closed #11 (cross-realm objects), #9 (TypeScript narrowing), #12 (performance implementation), #2/#3 (prototype definition) are already reflected in 4.1.0 and covered by original/current tests. Closed #6/#7 concern obsolete engine/browser expectations; this ESM fork preserves Node >=12 without converting its module format. Runtime source is unchanged.

## Reviewed issue entries

- [sindresorhus/is-plain-obj#12](https://github.com/sindresorhus/is-plain-obj/issues/12) (closed): Performance improvement
- [sindresorhus/is-plain-obj#11](https://github.com/sindresorhus/is-plain-obj/issues/11) (closed): Does not work with cross-realm objects
- [sindresorhus/is-plain-obj#2](https://github.com/sindresorhus/is-plain-obj/issues/2) (closed): Is Object.create({}) a plain object or not ?
- [sindresorhus/is-plain-obj#6](https://github.com/sindresorhus/is-plain-obj/issues/6) (closed): Remove arrow syntax for browser compatibility
- [sindresorhus/is-plain-obj#9](https://github.com/sindresorhus/is-plain-obj/issues/9) (closed): [typescript] Why not narrow it to `Record<string | number | symbol, unknown>` instead of `object`?
- [sindresorhus/is-plain-obj#7](https://github.com/sindresorhus/is-plain-obj/issues/7) (closed): usage in remark
- [sindresorhus/is-plain-obj#3](https://github.com/sindresorhus/is-plain-obj/issues/3) (closed): Document Object.create(null) result in readme
