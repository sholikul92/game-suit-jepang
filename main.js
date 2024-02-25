class Game {
	constructor() {
		this.optionPlayer = "";
		this.optionBot = "";
		this.result = "";
	}

	set setOptionPlayer(option) {
		return (this.optionPlayer = option);
	}

	get getOptionPlayer() {
		return this.optionPlayer;
	}

	playGame() {
		const option = ["✊", "🖐️", "✌️"];
		this.optionBot = option[Math.floor(Math.random() * option.length)];

		if (this.optionPlayer === "✊") {
			if (this.optionBot === "✌️") {
				return (this.result = "You Win 🥳");
			} else if (this.optionBot === "🖐️") {
				return (this.result = "You Lose 😭");
			} else {
				return (this.result = "Seri 😎");
			}
		} else if (this.optionPlayer === "🖐️") {
			if (this.optionBot === "✊") {
				return (this.result = "You Win 🥳");
			} else if (this.optionBot === "✌️") {
				return (this.result = "You Lose 😭");
			} else {
				return (this.result = "Seri 😎 ");
			}
		} else {
			if (this.optionBot === "✊") {
				return (this.result = "You Win 🥳");
			} else if (this.optionBot === "🖐️") {
				return (this.result = "You Lose 😭");
			} else {
				return (this.result = "Seri 😎");
			}
		}
	}

	printResult() {
		const container = document.getElementById("container");

		const area = `<p class="result">${this.result}</p>
<div class="area">
    <div class="result-option">
        <span class="item">${this.getOptionPlayer}</span>
        <span>You</span>
    </div>
    <div class="result-option">
        <span class="item">${this.optionBot}</span>
        <span>Computer</span>
    </div>
</div>`;

		container.innerHTML = area;
	}
}

const game = new Game();

const batu = document.getElementById("✊");
const kertas = document.getElementById("🖐️");
const gunting = document.getElementById("✌️");

batu.addEventListener("click", () => {
	game.setOptionPlayer = batu.innerHTML;
	game.playGame();
	game.printResult();
});

kertas.addEventListener("click", () => {
	game.setOptionPlayer = kertas.innerHTML;
	game.playGame();
	game.printResult();
});

gunting.addEventListener("click", () => {
	game.setOptionPlayer = gunting.innerHTML;
	game.playGame();
	game.printResult();
});
