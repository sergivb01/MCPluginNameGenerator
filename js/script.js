let output = document.getElementById('corename');
let btn = document.getElementById('btn-click');

btn.onclick = (event) => {
	output.innerHTML = `${getRandomLetter()}HCF`;
	event.preventDefault();
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let getRandomLetter = () => {
	return alphabet[Math.floor(Math.random() * alphabet.length)];
};
