_d = new Map([[0,'zéro'],
        [1, 'un'],
        [2, 'deux'],
        [3, 'trois'],
        [4, 'quatre'],
        [5, 'cinq'],
        [6, 'six'],
        [7, 'sept'],
        [8, 'huit'],
        [9, 'neuf'],
        [10, 'dix'],
        [11, 'onze'],
        [12, 'douze'],
        [13, 'treize'],
        [14, 'quatorze'],
        [15, 'quinze'],
        [16, 'seize'],
        [17, 'dix-sept'],
        [18, 'dix-huit'],
        [19, 'dix-neuf'],
        [20, 'vingt'],
        [21, 'vingt et un'],
        [30, 'trente'],
        [31, 'trente et un'],
        [40, 'quarante'],
        [41, 'quarante et un'],
        [50, 'cinquante'],
        [51, 'cinquante et un'],
        [60, 'soixante'],
        [61, 'soixante et un'],
        [70, 'soixante-dix'],
        [71, 'soixante et onze'],
        [72, 'soixante-douze'],
        [73, 'soixante-treize'],
        [74, 'soixante-quatorze'],
        [75, 'soixante-quinze'],
        [76, 'soixante-seize'],
        [77, 'soixante-dix-sept'],
        [78, 'soixante-dix-huit'],
        [79, 'soixante-dix-neuf'],
        [80, 'quatre-vingts'],
        [81, 'quatre-vingt-un'],
        [82, 'quatre-vingt-deux'],
        [83, 'quatre-vingt-trois'],
        [84, 'quatre-vingt-quatre'],
        [85, 'quatre-vingt-cinq'],
        [86, 'quatre-vingt-six'],
        [87, 'quatre-vingt-sept'],
        [88, 'quatre-vingt-huit'],
        [89, 'quatre-vingt-neuf'],
        [90, 'quatre-vingt-dix'],
        [91, 'quatre-vingt-onze'],
        [92, 'quatre-vingt-douze'],
        [93, 'quatre-vingt-treize'],
        [94, 'quatre-vingt-quatorze'],
        [95, 'quatre-vingt-quinze'],
        [96, 'quatre-vingt-seize'],
        [97, 'quatre-vingt-dix-sept'],
        [98, 'quatre-vingt-dix-huit'],
        [99, 'quatre-vingt-dix-neuf'],
        [100, 'cent']]);

function hundreds(n){
	return Math.floor(n / 100);
}

function tens(n){
    return Math.floor(n / 10) - hundreds(n);
}

function units(n) {
	console.assert(n >= 0, "n must be > 0");
	return Math.floor(n) - tens(n)*10;
}

function cardinal(n){
    console.assert(n <= 110, "limité à 110");

    const unites = units(n);
    const dizaines = tens(n);
    const centaines = hundreds(n);
    
    if (n < 17){
        return _d.get(n);
    }
    if (n <= 100 && _d.has(n)) {
        return _d.get(n);
       
    } else {
        if (n <= 100) {
            return `${_d.get(dizaines*10)}-${_d.get(unites)}`;
        } else {
            if (dizaines == 0 && unites == 0) {
                return `${centaines} cents`;    
            } else {
                // case n = 100 already dealt with
                return `${_d.get(centaines)}-cent-${_d.get(dizaines*10)}-${_d.get(unites)}`;
            }
        }
	}
}
