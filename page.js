// page.js

function svgElem(name){
	return document.createElementNS("http://www.w3.org/2000/svg", name);
}

const PAGE = {
	width:420,
	height:297,
	margin:10,
	nx:4,
	ny:2};


function traits_de_coupe(svg, nx, ny){
	const M = PAGE.margin;
	const L = M - 2;	// longueur des traits
	const g = svgElem('g');
	svg.appendChild(g);
	g.setAttribute('class', 'coupe');
	for (let ix = 0 ; ix < nx + 1 ; ix++ ) {
		const x = M + ix * CARD.width;
		let p = svgElem('path');
		p.setAttribute('d', `M${x},0 v${L}`);
		g.appendChild(p);
		
		p = svgElem('path');
		p.setAttribute('d', `M${x},${PAGE.height} v${-L}`);
		g.appendChild(p);
	}
	for (let iy = 0 ; iy < ny + 1 ; iy++){
		const y = M + iy * CARD.height;
		let p = svgElem('path');
		p.setAttribute('d', `M0,${y} h${L}`);
		g.appendChild(p)
		
		p = svgElem('path')
		p.setAttribute('d', `M${PAGE.width},${y} h${-L}`);
		g.appendChild(p);
    }
}

function grid(svg, offset){
	const g = svgElem('g');
	svg.appendChild(g);

	g.setAttribute('transform', `translate(${PAGE.margin}, ${PAGE.margin})`);
	let nbByPage = PAGE.nx * PAGE.ny;

	g.setAttribute('id', `grid${offset}_${offset + nbByPage - 1}`);
	g.setAttribute('class', 'grid');
	for (let iy = 0; iy < PAGE.ny ; iy++) {
		let y = iy * CARD.height;
		for (let ix = 0 ; ix < PAGE.nx ; ix ++) {
			let x = ix * CARD.width;
			const n = iy * PAGE.nx + ix + offset;
			if (n > 100) break;
			c = card(svg, n);
			c.setAttribute('transform', `translate(${x},${y})`);
			g.appendChild(c);
		}
	}
} 

function page(svg, start){
	const p = svgElem('g');
	svg.appendChild(p);
	p.setAttribute('class', 'page');
	p.setAttribute('id', `page_${start}`);
	traits_de_coupe(p, PAGE.nx, PAGE.ny);
	grid(p, start, card);
	return p;
}

function addPageToNamedViews(p_num, y){
	const sodipodiPage = document.createElementNS("http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd", 'inkscape:page'); 
	sodipodiPage.setAttribute('x', "0");
	sodipodiPage.setAttribute('y', y);
	sodipodiPage.setAttribute('width', "420");
	sodipodiPage.setAttribute('height', "297");
	sodipodiPage.setAttribute('id', `page${p_num+1}`);
	sodipodiPage.setAttribute('margin', "0");
	sodipodiPage.setAttribute('bleed', "0");
	document.getElementById('namedview1').appendChild(sodipodiPage);
}



function allPages(){
	const layer1 = document.getElementById('layer1');
	const NB_PER_PAGE = PAGE.nx * PAGE.ny;
	const NB_PAGES = Math.ceil(101 / NB_PER_PAGE);

	const svg1 = document.getElementById('svg1');
	svg1.setAttribute('width', "420mm");

	const H = NB_PAGES * PAGE.height + (NB_PAGES - 1) * 10;
	svg1.setAttribute('height', `${H}mm`);
	svg1.setAttribute('viewBox', `0 0 420 ${H}`);
	
	for (let p = 0; p < NB_PAGES ; p++) {
		let y = p * (PAGE.height + 10);
		addPageToNamedViews(p, y);
		let g = page(layer1, p * NB_PER_PAGE);
		g.setAttribute('transform', `translate(0, ${y})`);
	}
}
