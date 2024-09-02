// number_class.js



// to be continued
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var triangles;

// donne le n-ième nombre triangulaire
// ex : triangle_num(3) -> 6
function triangle_num(n) {
	return n * (n + 1) / 2;
}

function range(...args) {
	let a = 0, b = 0, step = 1;
	switch (args.length) {
		case 1:
			b = args[0];
			break;
		case 2:
			[a, b] = args
			break;
		case 3:
			[a, b, step] = args;
			break;
		default:
			throw new Error("range(a, b, step) : wrong number of arguments : ${args.length}")
	}
	if (step == 0) throw new Error("range(start, end, step) : step cannot be 0");
	if (Math.sign(b - a) != Math.sign(step)) throw new Error(`calling range(${a}, ${b}, ${step}). b - a and step should have the same sign.`);
	const n = (b - a) / step;
	const arr = Array.from({length: n}, (_, i) => a + i * step);
	return arr;
}

// donne l'antécédent de y par la fonction triangle_num
// soit le nombre de couches du triangle 
// ex : triangle_num_inverse(6) -> 3
// la fonction retourne un float de valeur entière pour les nombres triangulaires
function triangle_num_inverse(y) {
    return (Math.sqrt(1 + 8 * y) - 1) / 2;
}

function isTriangle(n){
    if (n != Math.floor(n) ) console.debug(`isTriangle(n) : n = ${n} should be an integer`)
    const tni = triangle_num_inverse(n);
	return tni == Math.floor(tni);
}


function _build_triangles(maxi = 100){
	const n = Math.floor(triangle_num_inverse(maxi));
    let t = new Int16Array(n+1);

	for (var i = 1; i < n + 1; i++) {
		t[i] = triangle_num(i);
	}
	
	// exclude 1
    return t.slice(1);
}


triangles = _build_triangles();


function isPrime(n){
	return primes.includes(n);
}


function grid_size(n) {
    a = 1;
    b = 1;
    if (isPrime(n)) {
        if (n == 0) return [0, 0];
        a = Math.floor(Math.sqrt(n));
        b = Math.ceil(n / a);
    } else {
        // n is not prime a full rectangle exists with 2 >= b >= a 
        d = Math.floor(Math.sqrt(n));
        while (d < n){
            if (n % d == 0) {
                a = Math.floor(Math.min(d, n / d));
                b = Math.floor(Math.max(d, n / d));
                break;
			}
            d += 1;
		}
	}
    return [a, b];
}

