const User = function(name) {
	this.name = name;
	this.chatroom = null;
}

User.prototype = {
	send: function(message, to) {
		this.chatroom.send(message, this, to);
	},

	receive: function(message, from) {
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
}

// Mediator
const Chatroom = function() {
	let users = {}; //list of users

	return {
		register: function(user) {
			users[user.name] = user;
			user.chatroom = this;
		},

		send: function(message, from, to) {
			if(to) {
				// Single user message
				to.receive(message, from);
			} else {
				// Mass message
				for(key in users) {
					if(users[key] !== from) {
						users[key].receive(message, from);
					}
				}
			}
		}
	}
}

const brad = new User('Brad');
const meggy = new User('Meggy');
const will = new User('Will');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(meggy);
chatroom.register(will);

brad.send('Hello Meggy', meggy);
meggy.send('Hi Brad', brad);
will.send('Whatsup everyone');
