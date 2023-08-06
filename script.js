
const btns = document.querySelectorAll('button');
const playerText = document.querySelector('.player');
const cpuText = document.querySelector('.cpu');
const scoreText = document.querySelector('.score');
let playerScore = 0;
let cpuScore = 0;

btns.forEach(function(btn) {
	btn.addEventListener('click', gameStart);
});

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0) return 'rock';
	else if (choice === 1) return 'paper';
	else return 'scissor';
}

function gameStart(event) {
	let choice = event.target.innerText.toLowerCase();
	let compChoice = getComputerChoice();
	console.log(choice);
	playerText.innerText = `You: ${choice}`;
	cpuText.innerText = `CPU: ${compChoice}`;
	if (gameCheck(choice, compChoice) === 'You win') {
		playerScore++;
		playerText.innerText += ' WIN!'
		cpuText.innerText += ' LOSE!'
	}
	else if (gameCheck(choice, compChoice) === 'You lose') {
		cpuScore++;
		playerText.innerText += ' LOSE!'
		cpuText.innerText += ' WIN!'
	}
	else {
		playerText.innerText += ' TIE!'
		cpuText.innerText += ' TIE!'
	}
	scoreText.innerText = `You: ${playerScore} CPU: ${cpuScore}`;
	if (playerScore >= 10 || cpuScore >= 10) {
		if (playerScore > cpuScore) scoreText.innerText = 'YOU WIN!';
		else scoreText.innerText = 'CPU WIN!';
		playerScore = 0;
		cpuScore = 0;
	}
}

function gameCheck(userPick, compPick) {
	if (userPick === 'rock' && compPick === 'paper') {
		return 'You lose';
	}
	else if (userPick === 'paper' && compPick === 'scissor') {
		return 'You lose';
	}
	else if (userPick === 'scissor' && compPick === 'rock') {
		return 'You lose';
	}
	else if (userPick === compPick) {
		return 'Tie'
	}
	else {
		return 'You win';
	}
}

//reusable
function random(max) {
	return Math.floor(Math.random() * max);
}