# @stackline/is-plain-obj

Independent maintenance fork of `is-plain-obj@4.1.0`. Original API, module format, runtime dependency ranges, and supported Node.js engines are preserved.

```sh
npm install @stackline/is-plain-obj
# Preserve existing imports with an npm alias:
npm install is-plain-obj@npm:@stackline/is-plain-obj@1.0.0
```

See [UPSTREAM.md](UPSTREAM.md) for the exact source and issue review, and [CHANGELOG.md](CHANGELOG.md) for focused maintenance changes. Development and release tooling runs on Node.js 24; that does not change the library runtime requirement.

Maintained by [Stackline](https://alexandro.net/). [Issues](https://github.com/alexandroit/stackline-is-plain-obj/issues) · [npm](https://www.npmjs.com/package/@stackline/is-plain-obj).

## Upstream documentation

# is-plain-obj

> Check if a value is a plain object

An object is plain if it's created by either `{}`, `new Object()`, or `Object.create(null)`.

## Install

```
$ npm install is-plain-obj
```

## Usage

```js
import isPlainObject from 'is-plain-obj';
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
