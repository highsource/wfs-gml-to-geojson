# wfs-gml-to-geojson

**Convert a [GML](https://en.wikipedia.org/wiki/Geography_Markup_Language) from a [Web Feature Service (WFS)](http://docs.geoserver.org/latest/en/user/services/wfs/index.html) to [GeoJSON](http://geojson.org).** Accepts the format of [`xml-reader`](https://www.npmjs.com/package/xml-reader) (with the `preserveMarkup` flag) as input.

[![npm version](https://img.shields.io/npm/v/wfs-gml-to-geojson.svg)](https://www.npmjs.com/package/wfs-gml-to-geojson)
[![build status](https://img.shields.io/travis/derhuerst/wfs-gml-to-geojson.svg)](https://travis-ci.org/derhuerst/wfs-gml-to-geojson)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/wfs-gml-to-geojson.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install wfs-gml-to-geojson
```


## Usage

```js
const h = require('hyper-xml')
const parse = require('wfs-gml-to-geojson')

const el = // todo

const geometry = parse(el)
console.log(geometry)
```

```js
// todo
```

You may optionally pass in a function to transform coordinates. The default transform is `(x, y) => [x, y]`.


## Contributing

If you have a question or have difficulties using `wfs-gml-to-geojson`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/wfs-gml-to-geojson/issues).
