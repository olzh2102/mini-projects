// Game values
let min = 1,
		max = 10,
		guessNum = 3,
		winningNum = 7;

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

// Listen for guess
guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	// Validate
	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, '#b00b1e');
	}

	// Check if it is winning number
	if(guess === winningNum) {
		// Disable the input
		guessInput.disabled = true;

		// Change the border color
		guessInput.style.borderColor = 'green';

		// Set message
		setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
	}
});


// Set message
function setMessage(msg, color) {
	message.textContent = msg;
	message.style.color = color;
}
