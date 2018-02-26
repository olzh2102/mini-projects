// Game values
let min = 1,
		max = 10,
		guessesLeft = 3,
		winningNum = getRandomNum(min, max);

// UI Elements
const game = document.querySelector('#game'),
			minNum = document.querySelector('.min-num'),
			maxNum = document.querySelector('.max-num'),
			guessBtn = document.querySelector('#guess-btn'),
			guessInput = document.querySelector('#guess-input'),
			message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(event) {
	if(event.target.className === 'play-again') {
		window.location.reload();
	}
});

// Listen for guess
guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	// Validate
	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, '#b00b1e');
	}

	// Check if it is winning number
	if(guess === winningNum) {
		gameOver(true, `${winningNum} is correct, YOU WIN!`);
	} else {
		// Wrong answer
		guessesLeft -= 1;

		if(guessesLeft === 0) {
			gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
		} else {
			// Wrong answer - game proceeds

			// Clear the input field
			guessInput.value = '';

			// Change the border color
			guessInput.style.borderColor = '#b00b1e';

			// Tell user its wrong number
			setMessage(`${guess} is wrong, ${guessesLeft} guesses left`, '#b00b1e');
		}
	}
});

// Game over
function gameOver(won, msg) {
	let color;
	won === true ? color = 'green' : color = '#b00b1e';

	// Disable the input
	guessInput.disabled = true;

	// Change the border color
	guessInput.style.borderColor = color;

	// Tell user its wrong number
	setMessage(msg, color);

	// Play again
	guessBtn.value = 'play again';
	guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


// Set message
function setMessage(msg, color) {
	message.textContent = msg;
	message.style.color = color;
}
