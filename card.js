// Card.js
/*
 * Defines and lays items, features of a number card
 * 
 */

const CARD = {width:100, height:138};
const CARD_NUMBER = {x:0, y:CARD.height - 20, width:20, height:20};
const CARD_LETTER = {x:20, y:CARD.height - 20, width:80, height:20};


function number(svg, n){
	const g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('class', 'number');
	
	const r = svgElem('rect');
	r.setAttribute('width', CARD_NUMBER.width);
	r.setAttribute('height', CARD_NUMBER.height);
	g.appendChild(r);
	
	const t = svgElem('text');
	t.innerHTML = n;
	t.setAttribute('x', CARD_NUMBER.width / 2);
	t.setAttribute('y', CARD_NUMBER.height / 2);
	g.appendChild(t);

	g.setAttribute('transform', `translate(${CARD_NUMBER.x}, ${CARD_NUMBER.y})`);
	return g;
}


function letter(svg, n) {
	const g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('id',`letter${n}`);
	g.setAttribute('class', 'letter');
	
	const r = svgElem('rect');
	r.setAttribute('width', CARD_LETTER.width);
	r.setAttribute('height', CARD_LETTER.height);
	g.appendChild(r);
	
	const t = svgElem('text');
	t.setAttribute('x', CARD_LETTER.width / 2);
	t.setAttribute('y', CARD_LETTER.height / 2);
	
	const blabla = cardinal(n);
	t.innerHTML = blabla;
	
	// const words = blabla.split('-');
	
	// if (words.length > 2) {
	// 	ts = svgElem('tspan');
	// 	ts.setAttribute('text-anchor', 'left');
	// 	ts.innerHTML = words.slice(0, 2).join('-')
	// 	t.appendChild(ts);
	// 	ts = svgElem('tspan');
	// 	ts.setAttribute('text-anchor', 'left');
	// 	ts.innerHTML = words.slice(2).join('-');
	// 	// ts.setAttribute('dx', -CARD_LETTER.width);
	// 	// ts.setAttribute('dy', 9);
	// 	t.appendChild(ts);
	// } else {
	// 	t.innerHTML = blabla;
	// }
	g.appendChild(t);
	g.setAttribute('transform', `translate(${CARD_LETTER.x}, ${CARD_LETTER.y})`);
}


function card(svg, n) {
	_card = svgElem('g');
	svg.appendChild(_card)
	_card.setAttribute('id', `card_${n}`);
	_card.setAttribute('class', "card");
	
	// frame around card
	r = svgElem('rect');
	r.setAttribute('width', CARD.width);
	r.setAttribute('height', CARD.height);
	_card.appendChild(r);
	
	// number in figures
	number(_card, n);
	
	// number in words
	letter(_card, n);

	// decimal repr
	let dd = decimal(_card, n);
	dd.setAttribute('transform', `translate(${0.5} ${CARD.height - 39.5}) scale(0.95) `);

	if (n > 0) {
		clump(_card, n);
	}

	if (n > 2 && isTriangle(n)) 
	{
		let tr = triangleClump(g, n);
		dy = tr.getBBox().height;
		tr.setAttribute('y', `${-dy}`);
		_card.appendChild(tr);
	}
	return _card;
}
