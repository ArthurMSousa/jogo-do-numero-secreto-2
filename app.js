//let title = document.querySelector('h1');
//title.innerHTML = 'Jogo do número secreto';

//let paragraph = document.querySelector('p');
//paragraph.innerHTML = 'Escolha um número entre 1 a 10';

function displayText(tag, text) {
    let space = document.querySelector(tag);
    space.innerHTML = text;  
}

displayText('h1', 'Jogo do número secreto');
displayText('p', 'Escolha um número entre 1 e 100');

function verifyGuess() {

}