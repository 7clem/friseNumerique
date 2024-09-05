// clump.js

function addSymbolsToDefs(svg){
	defs = svgElem('defs');
	svg.appendChild(defs);
	
	let e = document.getElementById('c1')
	console.assert(e == null)
		
	e = svgElem('circle');
	e.setAttribute('id', 'c1');
	e.setAttribute('r', 5);
	e.setAttribute('cx', 6);
	e.setAttribute('cy', 6);
	defs.appendChild(e);
	
	e = svgElem('rect');
	e.setAttribute('id', 'r1');
	e.setAttribute('width', 10);
	e.setAttribute('height', 10);
	defs.appendChild(e);

	e = svgElem('rect');
	e.setAttribute('id', 'u1');
	e.setAttribute('width', 2);
	e.setAttribute('height', 2);
	defs.appendChild(e);

	g = stack(defs, 10);
	g.setAttribute('id', 'ten');
	const H = e.getBBox().height;
	
	for (let i = 0 ; i < 10; i++){
		e = svgElem('use');
		e.setAttribute('href', '#u1');
		e.setAttribute('y', `${i * H}`);
	}
	defs.appendChild(g);

}

function productText(a, b) {
	t = svgElem('text');
	t.setAttribute('class', 'productText');
	t.innerHTML = `${a}x${b}`;
	return t;
}

function rectClump(svg, n) {
	g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('id', `cl_rect_${n}`);
	g.setAttribute('class', 'rectClump');
	[a, b] = grid_size(n);
	for (ix = 0 ; ix < a ; ix++) {
		let x = 10 * ix;
		for (iy = 0 ; iy < b ; iy++) {
			let y = 10 * iy;
			const u = svgElem('use');
			u.setAttribute('href', '#r1');
			u.setAttribute('x', x);
			u.setAttribute('y', y);
			g.appendChild(u);
			calc = ix * b + iy + 1;
			if (calc > n) {
				console.log(`Had to break, but shouldn't have. ${a} x ${b} : n=${n}`);
				break;
			}
		}
	}
	scaleAndCenterInnerBox(svg, g);
	const bbcr = g.getBoundingClientRect();
	const bb = g.getBBox();
	r = svgElem('rect');
	r.setAttribute('x', `${bb.x}`);
	r.setAttribute('y', `${bb.y}`)
	r.setAttribute('width', `${bb.width}`)
	r.setAttribute('height', `${bb.x}`)
	g.appendChild(r);
	let y = 54;
	
	const t = productText(a, b);
	t.setAttribute('x', `50`);
	t.setAttribute('y', `${y}`);
	t.setAttribute('class', 'productText noto-sans-bold900');
	svg.appendChild(t);
	
	return g;
}



function primeClump(svg, n) {
	g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('id', `cl_prim${n}`);
	g.setAttribute('class', 'primeClump');
	[a, b] = grid_size(n);
	for (ix = 0 ; ix < a ; ix++) {
		x = 10 * ix;
		for (iy = 0 ; iy < b ; iy++) {
			y = 10 * iy;
			const u = svgElem('use');
			u.setAttribute('href', '#r1');
			u.setAttribute('x', x);
			u.setAttribute('y', y);
			g.appendChild(u);
			calc = ix * b + iy + 1;
			if (calc >= n) break; 
		}
	}
	scaleAndCenterInnerBox(svg, g);
	return g;
}


function triangleClump(svg, n) {
	g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('id', `clump_tri${n}`);
	g.setAttribute('class', 'triangleClump');
	const ySpacing = 10;  // Vertical spacing between rows
	const xSpacing = 10;  // Horizontal spacing between tokens
	
	let currentToken = 0;
	const ROWS = triangle_num_inverse(n);
	for (let row = ROWS; row > 0; row--) {
		const startX = 5;
		
		for (let col = 0; col < row; col++) {
			// Calculate x and y positions
			const x = startX + col * xSpacing;  
			const y = (ROWS-row) * ySpacing + 5;     

			// Create a circle and append it to the SVG
			const u = svgElem('use');
			u.setAttribute('href', '#c1');
			u.setAttribute("x", x);
			u.setAttribute("y", y);
			g.appendChild(u);
			currentToken++;
			u.setAttribute('id', `token_${n}.${currentToken}`);
		}
	}
	
	const cx = 0;
	const cy = (ROWS + 1) * ySpacing;
	g.setAttribute('transform', `scale(0.2)`);
	return g;
}


function scaleAndCenterInnerBox(outer, inner){
	const ob = CARD;
	const ib = inner.getBBox();
	const MARGIN = 0;
	const scaleX = (ob.width) / (ib.width + MARGIN);
	const scaleY = (ob.height) / (ib.height + MARGIN);
	const scale = Math.min(scaleX, scaleY) / 1.3;
	const offsetX = ob.width / 2 - ib.width * scale / 2;
	const offsetY = (ob.height - CARD_NUMBER.height) / 2 - ib.height * scale / 2 ;
	inner.setAttribute('transform',`translate(${offsetX}, ${offsetY}) scale(${scale}) `);
}



function clump(svg, n) {
	let g;
	if (isPrime(n) || n == 1) {
		g = primeClump(svg, n);
	} else {
		g = rectClump(svg, n);
	}
	
	return g;
}


function stack(svg, n=10) {
	const g = svgElem('g');
	const SPACING = document.getElementById("u1").getBBox().height;
	for (let iy = 0 ; iy < n ; iy++) {
		let y = SPACING * (9 - iy);
		const u = svgElem('use');
		u.setAttribute('href', '#u1');
		//u.setAttribute('x', 0);
		u.setAttribute('y', y);
		g.appendChild(u);
	}
	return g;
}


function decimal(svg, n){
	let g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('class', 'decimal');
	g.setAttribute('id', `decimal_${n}`);

	let r = svgElem('rect');
	r.setAttribute('width', 20);
	r.setAttribute('height', 20);
	g.appendChild(r);
	const TENS = tens(n);
	const UNITS = units(n);
	const SPACING = document.getElementById('u1').getBBox().height;

	// n = 10 * TENS + UNITS
	

	// TENS tens
	for (let ix = 0 ; ix < TENS ; ix++) {
		let x = SPACING * ix;
		const s = stack(g, 10);
		s.setAttribute('transform', `translate(${x}, 0)`);
		g.appendChild(s);
	}

	// units
	let x = TENS * SPACING;
	const s = stack(g, UNITS);
	s.setAttribute('transform', `translate(${x}, 0)`);
	g.appendChild(s);
	return g;
}

