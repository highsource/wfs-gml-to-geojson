'use strict'

const textOf = (el) => {
	if (!el || !el.children) return null
	const c = el.children.find(c => c.type === 'text')
	return c && c.value || null
}


const parse = (_, transformCoords = noTransform, stride = 2) => {
	// todo
	return null
}

const parseCoords = (s, ctx, opts) => {
	ctx = ctx || {};
	const srsDimension = ctx.srsDimension || 2;
	// TODO AV: Check srsDimension?

	const coords = s.replace(/\s+/g, ' ').trim().split(' ');
	if (coords.length === 0 || (coords.length % srsDimension) !== 0) {
		throw new Error(`Invalid coordinates list, number of coordinates ${coords.length} must be divisible by the srsDimension ${srsDimension}.`);
	}

	const points = [];
	for (let i = 0; i < (coords.length - 1); i += srsDimension) {
		const point = coords.slice(i, i + srsDimension).map(parseFloat)
		points.push(...point);
	}
	return points;
}


Object.assign(parse, {
	parseCoords
})

module.exports = parse