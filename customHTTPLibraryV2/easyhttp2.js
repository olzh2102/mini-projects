/**
* EasyHTTP library
* Library for making HTTP requests
*
* @version 2.0.0
* @author Olzhas Kurikov
* @license MIT
*
**/

class EasyHTTP {

	// Make an HTTP GET request
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.then(error => reject(error));
		});
	}

	// Make an HTTP POST request
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.then(error => reject(error));
		});
	}

	// Make an HTTP PUT request
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.then(error => reject(error));
		});
	}

	// Make an HTTP DELETE request
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(() => resolve('Resource is deleted ...'))
				.then(error => reject(error));
		});
	}
}
