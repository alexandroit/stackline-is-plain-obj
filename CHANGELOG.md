# Stackline changes

## 1.0.0 — 2026-09-28

Independent maintenance fork of is-plain-obj 4.1.0. Preserve published API, module exports and runtime engine compatibility. No open issues were present in the collection. Closed #11 (cross-realm objects), #9 (TypeScript narrowing), #12 (performance implementation), #2/#3 (prototype definition) are already reflected in 4.1.0 and covered by original/current tests. Closed #6/#7 concern obsolete engine/browser expectations; this ESM fork preserves Node >=12 without converting its module format. Runtime source is unchanged.

Pinned development tools, real API and packed-consumer checks, GitHub CI/CodeQL gates, exact-artifact npm provenance and immutable release evidence are added. See UPSTREAM.md for limits of issue triage.
