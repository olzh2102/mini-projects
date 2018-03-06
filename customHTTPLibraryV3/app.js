const http = new EasyHTTP;

// Get Users
//http.get('https://jsonplaceholder.typicode.com/users')
//	.then(data => console.log(data))
//	.catch(error => console.log(error));

// Post Users data
const data = {
	name: 'Mike Smith',
	username: 'mikkysmith',
	email: 'msmith@yahoo.com'
}

// Create post
//http.post('https://jsonplaceholder.typicode.com/users', data)
//	.then(data => console.log(data))
//	.catch(error => console.log(error));

// Update post
//http.put('https://jsonplaceholder.typicode.com/users/2', data)
//	.then(data => console.log(data))
//	.catch(error => console.log(error));

// Delete post
http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(error => console.log(error));
