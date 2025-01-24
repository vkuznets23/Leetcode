/*
In this task, you'll simulate an API that processes a sequence of steps asynchronously. The task will involve working with multiple promises, handling error handling, and understanding how Promise chaining works.

Scenario:
You have a mock API that processes an order. The process has three steps:

Step 1: Check product availability (takes 2 seconds).
Step 2: Process payment (takes 3 seconds).
Step 3: Ship the product (takes 1 second).
Sometimes, there can be an issue with one of the steps (e.g., product out of stock or payment failure).

Your task is to simulate these steps using promises and handle possible errors.
*/
function CheakAvalability() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		const available = true;
		if (available)
			return resolve("Product is available");
		else
			return reject("Product is NOT available");
		}, 2000);
	});
}

function ProcessPayment() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		const paymentSuccess = true;
		if (paymentSuccess)
			return resolve("Payment is successful");
		else
			return reject("Cannot pay");
		}, 3000);
	});
}

function ShipProduct() {
	return new Promise((resolve) => {
		setTimeout(() => {
		resolve("Product shipped");
		}, 1000);
	});
}

function handleOrder() {
	CheakAvalability()
		.then (result => {
			console.log(result); // Product is available
      			return ProcessPayment();  // Move to next step
		})
		.then (result => {
			console.log(result);
			return ShipProduct();
		})
		.then (result => {
			console.log(result);
		})
		.catch(error => {
      			console.error('Error during the order process:', error);
    		});
}

handleOrder();
