let listOfDrawnNumbers = [];
let maxNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function displayText(tag, text) {
    let space = document.querySelector(tag);
    space.innerHTML = text;  
}

function displayInitialMessage() {
    displayText('h1', 'Jogo do número secreto');
    displayText('p', 'Escolha um número entre 1 e 10');
}

displayInitialMessage();

function verifyGuess() {
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber) {
        displayText('h1', 'Acertou!');
        let attemptsWord = attempts > 1 ? 'tentativas' : 'tentativa';
        let attemptsMessage = `Você descobriu o número secreto com ${attempts} ${attemptsWord}!`;
        displayText('p', attemptsMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            displayText('p', 'O número secreto é menor');
        } else {
            displayText('p', 'O número secreto é maior');
        }
        attempts++;
        clearSpace();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let numberOfElementsInTheList = listOfDrawnNumbers.length;

    if (numberOfElementsInTheList == maxNumber) {
        listOfDrawnNumbers = [];
    }

    if (listOfDrawnNumbers.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        listOfDrawnNumbers.push(chosenNumber);
        return chosenNumber;
    }
} 

function clearSpace() {
    guess = document.querySelector('input');
    guess.value = '';
}

function newGame() {
    secretNumber = generateRandomNumber();
    clearSpace();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
