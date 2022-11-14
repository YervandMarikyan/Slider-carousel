let span = document.querySelectorAll("header span");
let product = document.querySelectorAll('.product')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
const autoplay = true;

let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = () => {
	l = l + movePer;
	if (l > 210) {
		l = 0;
	}
	for (const i of product) {
		if (l > maxMove) {
			l = l - movePer;
		}
		i.style.left = '-' + l + '%';
	}
}
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) {
		l = 0;
	}
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}

function move() {
	right_mover();
}
move();

span[1].addEventListener("click", () => {
	right_mover();
});

span[0].addEventListener("click", () => {
	left_mover();
});

let s;

function auto() {
	if(autoplay) {
		s = setInterval(move, 1500);
	}
}
auto();

window.addEventListener("mouseover", () => {
	clearInterval(s);
});

window.addEventListener("mouseout", () => {
	auto();
});
