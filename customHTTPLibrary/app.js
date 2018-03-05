const http = new easyHTTP;

// Get Posts
//http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
	//if(error) {
		//console.log(error)
	//} else {
		//console.log(response);
	//}
//});

// Get Single Post
//http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
	//if(error) {
		//console.log(error)
	//} else {
		//console.log(response);
	//}
//});

// Create data
const data = {
	title: 'Custom post',
	body: 'Black cock sucking and rimming'
};

// Post data
//http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
	//if(error) {
		//console.log(error)
	//} else {
		//console.log(post);
	//}
//});

// Update the post
//http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
	//if(error) {
		//console.log(error)
	//} else {
	//	console.log(post);
	//}
//});

// Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
	if(error) {
		console.log(error)
	} else {
		console.log(response);
	}
});
