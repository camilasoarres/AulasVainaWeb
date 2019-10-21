// var myStart = document.getElementById('start');
// var myContainer = document.querySelector('.container');
// var buttons = document.getElementsByTagName('button');
// var resetButton = document.querySelector('#reset');
// var myButtons = document.querySelector('#buttons');

// myStart.addEventListener('click', function() {
//   console.log(myContainer.parentNode)
// });	
// http://www.aranhahomem.com/images/pictures/fantastico-homem-aranha.jpg

var ibagem = document.getElementById('ibagem');
var lista = [
	'https://i1.wp.com/gamelogia.com.br/wp-content/uploads/2016/11/gamer.jpg?resize=1280%2C640&ssl=1',
	'http://www.aranhahomem.com/images/pictures/fantastico-homem-aranha.jpg',
	'http://dc.rbsdirect.com.br/imagesrc/24402276.jpg?w=660',
	'https://www.on3w.com.br/agencia-web-sp-rj/uploads/2017/04/imagens-gratuitas-para-o-seu-site.jpg',
	'http://2.bp.blogspot.com/-4JzTdJFS_jo/T4SVsHRqCjI/AAAAAAAAK2A/3Va6CnkKoN0/s1600/34+Fotos+HD+Inverno+3dfoto3d.blogspot.com.br+(3).jpg',
]
var counter = 0

ibagem.addEventListener('click', function() {
	if (counter < 4) {
		counter = counter + 1
	} else {
		counter = 0
	}
	ibagem.setAttribute('src', lista[counter])
})
