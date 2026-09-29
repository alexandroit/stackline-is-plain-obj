# @stackline/is-plain-obj

> Check if a value is a plain object.

[![npm version](https://img.shields.io/npm/v/@stackline/is-plain-obj.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/is-plain-obj)
[![license](https://img.shields.io/npm/l/@stackline/is-plain-obj.svg?style=flat-square)](https://github.com/alexandroit/stackline-is-plain-obj)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-is-plain-obj-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-is-plain-obj)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/is-plain-obj/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/is-plain-obj/)** | **[npm](https://www.npmjs.com/package/@stackline/is-plain-obj)** | **[Issues](https://github.com/alexandroit/stackline-is-plain-obj/issues)** | **[Repository](https://github.com/alexandroit/stackline-is-plain-obj)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/is-plain-obj` is the Stackline-maintained distribution of `is-plain-obj@4.1.0`. It is an independent continuation of [is-plain-obj](https://github.com/sindresorhus/is-plain-obj); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/is-plain-obj@1.0.1` |
| API target | `is-plain-obj@4.1.0` |
| Supported Node.js | `>=12` |
| License | `MIT` |
| Module type | `module` |
| Types | `./index.d.ts` |
| Runtime dependencies | `none` |

## Installation

```bash
npm install @stackline/is-plain-obj
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install is-plain-obj@npm:@stackline/is-plain-obj
```

## Usage and API reference

### is-plain-obj

> Check if a value is a plain object

An object is plain if it's created by either `{}`, `new Object()`, or `Object.create(null)`.

## Install

```
$ npm install @stackline/is-plain-obj
```

## Usage

```js
import isPlainObject from '@stackline/is-plain-obj';
import {runInNewContext} from 'node:vm';

isPlainObject({foo: 'bar'});
//=> true

isPlainObject(new Object());
//=> true

isPlainObject(Object.create(null));
//=> true

// This works across realms
isPlainObject(runInNewContext('({})'));
//=> true

isPlainObject([1, 2, 3]);
//=> false

class Unicorn {}
isPlainObject(new Unicorn());
//=> false

isPlainObject(Math);
//=> false
```

## Related

- [is-obj](https://github.com/sindresorhus/is-obj) - Check if a value is an object
- [is](https://github.com/sindresorhus/is) - Type check values

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-plain-obj?utm_source=npm-is-plain-obj&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

## Credits and original authors

- Original project: [is-plain-obj](https://github.com/sindresorhus/is-plain-obj).
- Sindre Sorhus.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-is-plain-obj).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
