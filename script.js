
const btn = document.querySelector('button');

btn.addEventListener('click', test);

function test() {
	const cpu = getComputerChoice();
	//alert(gameCheck(userChoice(), cpu) + ' CPU: ' + cpu);
	alert(playRound());
}

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0) return 'rock';
	else if (choice === 1) return 'paper';
	else return 'scissor';
}

function userChoice() {
	return prompt('rock? paper? scissor?');
}

function gameCheck(userPick, compPick) {
	if (userPick == 'rock' && compPick == 'paper') {
		return 'You lose';
	}
	else if (userPick == 'paper' && compPick == 'scissor') {
		return 'You lose';
	}
	else if (userPick == 'scissor' && compPick == 'rock') {
		return 'You lose';
	}
	else if (userPick == compPick) {
		return 'Tie'
	}
	else {
		return 'You win';
	}
	//return userPick;
	//return string win or lose
}

function playRound() {
	let round = 5;
	let score = 0;
	for (let i = 0; i < round; i++) {
		if ((gameCheck(userChoice(), getComputerChoice())) == 'You win') {
			score++;
		}
	}
	if (score > round / 2) return 'You win';
	else return 'You lose';
}

//reusable
function random(max) {
	return Math.floor(Math.random() * max);
}