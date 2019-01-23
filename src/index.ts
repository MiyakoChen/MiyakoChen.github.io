function component() {
	var element = document.createElement('div');

	let testStr = 'aa';

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());