let ibagensList = [
  'assets/001.jpg',
  'assets/002.jpg',
  'assets/003.jpg',
  'assets/004.jpg',
  'assets/005.jpg',
  'assets/006.jpg',
  'assets/007.jpg',
  'assets/008.jpg',
  'assets/009.jpg',
  'assets/010.jpg',
  'assets/011.jpg',
  'assets/012.jpg',
  'assets/013.jpg',
]

let previousCounter = 12;
let currentCounter = 0;
let nextCounter = 1;

function setImage() {
  previous.setAttribute('src', ibagensList[previousCounter])
  current.setAttribute('src', ibagensList[currentCounter])
  next.setAttribute('src', ibagensList[nextCounter])
};

// Imagem anterior
let previous = document.querySelector('#previous');

// Imagem atual
let current = document.querySelector('#current');

// Proxima Imagem
let next = document.querySelector('#next');


// Função pra voltar a imagem
function previousImage() {
  if ( currentCounter > 0 && currentCounter <= ibagensList.length - 1) {
    currentCounter = currentCounter - 1;
  } else {
    currentCounter = ibagensList.length - 1
  }
  previousCounter = currentCounter === 0 ? ibagensList.length - 1 : currentCounter - 1
  nextCounter = currentCounter === ibagensList.length - 1 ? 0 : currentCounter + 1
  setImage()
}

// Função pra adiantar a imagem
function nextImage() {
  currentCounter = currentCounter === ibagensList.length - 1 ? 0 : currentCounter + 1;
  previousCounter = currentCounter === 0 ? ibagensList.length - 1 : currentCounter - 1
  nextCounter = currentCounter === ibagensList.length - 1 ? 0 : currentCounter + 1
  
  setImage()
}

previous.addEventListener('click', function previousImage() {
  if ( currentCounter > 0 && currentCounter <= ibagensList.length - 1) {
    currentCounter = currentCounter - 1;
  } else {
    currentCounter = ibagensList.length - 1
  }
  previousCounter = currentCounter === 0 ? ibagensList.length - 1 : currentCounter - 1
  nextCounter = currentCounter === ibagensList.length - 1 ? 0 : currentCounter + 1
  setImage()
});
next.addEventListener('click', function nextImage() {
  currentCounter = currentCounter === ibagensList.length - 1 ? 0 : currentCounter + 1;
  previousCounter = currentCounter === 0 ? ibagensList.length - 1 : currentCounter - 1
  nextCounter = currentCounter === ibagensList.length - 1 ? 0 : currentCounter + 1
  
  setImage()
});

setImage();

window.onload = document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    previousImage();
  } else return null;
});