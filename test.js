'use strict'

const test = require('tape');
const h = require('hyper-xml');
const rewind = require('@turf/rewind');

const parse = require('.');

test('parseCoords > default', (t) => {
	t.deepEqual(parse.parseCoords(' 140. -35 '), [140, -35]);
	t.end();
});

test('parseCoords > 2D', (t) => {
	t.deepEqual(parse.parseCoords(' 140. -35 ', { srsDimension: 2 }), [140, -35]);
	t.end();
});

test('parseCoords > 2D with srsDimension 3', (t) => {
	t.throws(() => parse.parseCoords('1 2', { srsDimension: 3 }), /Invalid coordinates list, number of coordinates 2 must be divisible by the srsDimension 3./);
	t.end();
});


test('parseCoords > 3D', (t) => {
	t.deepEqual(parse.parseCoords('140. -35 17.5', { srsDimension: 3 }), [140, -35, 17.5]);
	t.end();
});

test('parseCoords > 3D with srsDimension 2 by default', (t) => {
	t.throws(() => parse.parseCoords('1 2 3'), /Invalid coordinates list, number of coordinates 3 must be divisible by the srsDimension 2./);
	t.end();
});

test('parseCoords > 3D with srsDimension 2 explicitly', (t) => {
	t.throws(() => parse.parseCoords('1 2 3', { srsDimension: 2 }), /Invalid coordinates list, number of coordinates 3 must be divisible by the srsDimension 2./);
	t.end();
});




