
// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResult);

// Calculate result
function calculateResult(event) {
	event.preventDefault();

	// UI variables
	const loanAmount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const yearRepay = document.getElementById('years');

	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	// Formulas
	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	// Compute monthly payment
	const a = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * a * calculatedInterest) / (a - 1);

	if(isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
	} else {
		showError('Please check your numbers');
	}
}

// Show Error
function showError(error) {
	// Create a div
	const errorDiv = document.createElement('div');

	// Get elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	// Add class
	errorDiv.className = 'alert alert-danger';

	// Create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));

	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	// Clear error message after 2 seconds
	setTimeout(clearError, 2000);
}

function clearError() {
	document.querySelector('.alert').remove();
}
