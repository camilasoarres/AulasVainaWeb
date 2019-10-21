let ibagensList = [
  'https://thumbs.gfycat.com/RecklessOccasionalBichonfrise-size_restricted.gif',
  'https://thumbs.gfycat.com/WeeklyGracefulDeinonychus-size_restricted.gif',
  'https://thumbs.gfycat.com/HarmfulLinearBug-size_restricted.gif',
  'https://media.giphy.com/media/3o7buel8NhBPzl43Re/giphy.gif',
]

let counter = 0;

function setImage() {
  ibagem.setAttribute('src', ibagensList[counter])
}

let corpin = document.querySelector('body');

// Setinha de voltar
let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

// Imagem
let ibagem = document.createElement('img');
setImage()

// Setinha de adiantar
let next = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);

function init() {
  console.log(before, next);
  corpin.appendChild(before);
  corpin.appendChild(ibagem);
  corpin.appendChild(next);
}

before.addEventListener('click', function() {
  if ( counter > 0) {
    counter = counter - 1;
  } else { counter = 3}
  setImage()
})

next.addEventListener('click', function() {
  if ( counter < 3) {
    counter = counter + 1;
  } else { counter = 0}
  setImage()
})

init();