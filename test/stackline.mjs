import assert from 'assert';
import vm from 'vm';
import path from 'path';
import {pathToFileURL} from 'url';
const root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(new URL('..',import.meta.url).pathname);
(async () => {
const {default:isPlain}=await import(pathToFileURL(path.join(root,'index.js')).href);
for(const value of [{},{a:1},Object.create(null),vm.runInNewContext('({hello:1})'),{constructor:1}]) assert.strictEqual(isPlain(value),true);
for(const value of [null,undefined,[],new Date(),new (class Example {})(),Math,JSON,new Map(),new Set(),{[Symbol.toStringTag]:'Object'},{[Symbol.iterator]:function(){}},Object.create({})]) assert.strictEqual(isPlain(value),false);
console.log('Plain/null-prototype/cross-realm objects and tagged/iterable exclusions passed.');
})().catch(error => { console.error(error); process.exitCode=1; });
