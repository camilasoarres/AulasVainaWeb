let ibagem = document.getElementsById('img');

function trocadeibagem(ibagemlink) {
	ibagem.setAttribute('src', ibagemlink)
}

ibagem.addEventListener('click', function() {
	// trocadeibagem('http://wallsdesk.com/wp-content/uploads/2016/10/Nintendo-Switch-logo.jpg')
	ibagem.setAttribute('src', 'http://wallsdesk.com/wp-content/uploads/2016/10/Nintendo-Switch-logo.jpg')
}
})
console.log(ibagem)