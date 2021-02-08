# memoizee-proxy


Read this in other languages: [简体中文](https://github.com/wsafight/memoizee-proxy/blob/main/README.zh-CN.md)

Memoize based on Proxy.

## features

- [x] Works with any type, any length of function arguments - optional serialization.
- [x] Support for promises and asynchronous functions.
- [x] Configurable weak provides a WeakMap (friendly garbage collection).
- [x] Cache can be managed manually.
- [ ] Cache size can be limited on LRU basis.
- [x] Optional reference counter mode, that allows more sophisticated cache management.
- [ ] unit tests.

## API

| Property | Description | Type | Default |
| :----| :---- | :---- | :---- |
| normalizer | Generates a unique value based on the current parameter | (args: any[]) => string | Array.from(argument).join(',') |
| weak | Using WeakMap  | boolean | false |
| timeout | Timeout duration, expired delete | number | undefined |

## Installation

```bash
npm install memoizee-proxy
```
or

```bash
yarn add memoizee-proxy
```

## Usage

```ts
import memoizee from 'memoizee-proxy'

var fn = function(one, two, three) {
	/* ... */
};

memoized = memoize(fn);

memoized("foo", 3, "bar");
memoized("foo", 3, "bar"); // Cache hit
```

```ts
var afn = function(a, b) {
	return new Promise(function(res) {
		res(a + b);
	});
};
memoized = memoize(afn, { promise: true });

memoized(3, 7);
memoized(3, 7); // Cache hit
```



## Changelog

### 0.0.1
- Basically available, add parameters "normalizer"、 "weak" 、"timeout"

