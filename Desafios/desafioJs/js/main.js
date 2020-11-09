document.querySelector('#trigger').addEventListener('click', () => {
	let value = document.querySelector('#input-number').value

	if(value == 0) {
		document.write('Esse numero é invalido');
	} else {
		for(let i = 0; i < 11; i++) {
			document.write(value + ' x ' + i + ' = ' + (value*i) + '<br>')
		}
	}


})
