//Assume your favorite movie is jaws
let moviePhrase;
let favoriteMovie = 'jaws';
switch (favoriteMovie) {
	case 'jaws':
		moviePhrase = "You're gonna need a bigger boat.";
		break;
	case 'the shining':
		moviePhrase = 'All work and no play makes Jack a dull boy.';
		break;
	case 'star wars':
		moviePhrase = 'Do. Or do not. There is no try.';
		break;
	case 'forrest gump':
		moviePhrase = 'Life was like a box of chocolates.';
		break;
	case 'back to the future':
		moviePhrase = "Where we're going, we don't need roads.";
		break;
		dafault: moviePhrase = 'Great choice in movie';
		break;
}
console.log(moviePhrase);
