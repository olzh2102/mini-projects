const data = [
	{
		name: 'Michael Drinkwater',
		age: 34,
		gender: 'male',
		lookingfor: 'female',
		location: 'Berlin DE',
		image: 'https://randomuser.me/api/portraits/men/34.jpg'
	},
	{
		name: 'Alice Birch',
		age: 27,
		gender: 'female',
		lookingfor: 'male',
		location: 'Budapest HU',
		image: 'https://randomuser.me/api/portraits/women/66.jpg'
	},
	{
		name: 'Luis Antonio',
		age: 41,
		gender: 'male',
		lookingfor: 'female',
		location: 'Lyon FR',
		image: 'https://randomuser.me/api/portraits/men/73.jpg'
	},
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
	const currentProfile = profiles.next().value;

	if(currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
			<ul class="list-group">
				<li class="list-group-item">Name: ${currentProfile.name}</li>
				<li class="list-group-item">Age: ${currentProfile.age}</li>
				<li class="list-group-item">Location: ${currentProfile.location}</li>
				<li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
			</ul>
		`;

		document.getElementById('imageDisplay').innerHTML = `
			<img src="${currentProfile.image}">
		`;
	} else {
		// No more profiles - reload again
		window.location.reload();
	}

}

// Profiel Iterator
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < profiles.length ?
			{ value: profiles[nextIndex++], done: false } :
			{ done: true }
		}
	};
}
