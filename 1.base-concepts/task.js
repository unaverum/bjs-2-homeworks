"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let d = b ** 2 - 4 * a * c;

	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 100 / 12;
	let loanBody = amount - contribution;

	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	let roundedTotalPayment = Math.round(totalAmount * 100) / 100;

	return roundedTotalPayment;
}