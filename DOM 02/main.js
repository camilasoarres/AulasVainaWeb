let ibagens = [
  'razer.jpg',
  'game.svg',
  'nitendo01.png',
  'nitendo02.png',
]

let counter = 0

function setImage () {
  img.setAttribute('src', ibagens[counter]); 
}

// Peguei corpin
var corpin = document.getElementById('suave');

// Criei imagem 
let img = document.createElement('img');
setImage();
img.setAttribute('class', 'rodadinha')

// Criei criei a setinhas
let next = document.createElement('h1');
var text1 = document.createTextNode(">");
next.setAttribute('id', 'next')
next.appendChild(text1);

let before = document.createElement('h1');
var text2 = document.createTextNode("<");
before.setAttribute('id', 'before')
before.appendChild(text2);

function init () {
  // Adicionei tudo no corpin
  corpin.appendChild(before);
  corpin.appendChild(img);
  corpin.appendChild(next);

}

init();

// // Passando as fotos
document.querySelector('#before').addEventListener('click', function(){
  if (counter > 0 ) {
    counter = counter - 1
  } else {
    return null;
  }
  console.log(before, counter)
  setImage()
})

next.addEventListener('click', function(){
  if (counter >= 0 && counter < 3 ) {
    counter = counter + 1
  } else {
    return null;
  }
  console.log(before, counter)
  setImage()
})