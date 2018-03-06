/**
* EasyHTTP library
* Library for making HTTP requests
*
* @version 3.0.0
* @author Olzhas Kurikov
* @license MIT
*
**/

class EasyHTTP {

	// Make an HTTP GET request
	async get(url) {
		// Asyns/await way
		const response = await fetch(url);
		const responseData = await response.json();
		return responseData;

		//return new Promise((resolve, reject) => {
		//	fetch(url)
		//		.then(res => res.json())
		//		.then(data => resolve(data))
		//		.then(error => reject(error));
		//});
	}

	// Make an HTTP POST request
	async post(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const responseData = await response.json();
		return responseData;

		//return new Promise((resolve, reject) => {
		//	fetch(url, {
		//		method: 'POST',
		//		headers: {
		//			'Content-type': 'application/json'
		//		},
		//		body: JSON.stringify(data)
		//	})
		//		.then(res => res.json())
		//		.then(data => resolve(data))
		//		.then(error => reject(error));
		//});
	}

	// Make an HTTP PUT request
	async put(url, data) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const responseData = await response.json();
		return responseData;

		//return new Promise((resolve, reject) => {
		//	fetch(url, {
		//		method: 'PUT',
		//	  headers: {
		//			'Content-type': 'application/json'
		//		},
		//		body: JSON.stringify(data)
		//	})
		//		.then(res => res.json())
		//		.then(data => resolve(data))
		//		.then(error => reject(error));
		//});
	}

	// Make an HTTP DELETE request
	async delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		});

		const responseData = await 'Resource deleted...';
		return responseData;

		//return new Promise((resolve, reject) => {
		//	fetch(url, {
		//		method: 'DELETE',
		//		headers: {
		//			'Content-type': 'application/json'
		//		}
		//	})
		//		.then(res => res.json())
		//		.then(() => resolve('Resource is deleted ...'))
		//		.then(error => reject(error));
		//});
	}
}
