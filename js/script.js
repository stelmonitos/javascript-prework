function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(parseInt(playerInput)); // Parse player input as an integer

console.log('Gracz wpisał: ' + playerInput);
printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  console.log('Computer chose ' + argComputerMove);
  console.log('Player chose ' + argPlayerMove);

  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  }
}

displayResult(computerMove, playerMove);





/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
  }
else if(randomNumber == 3){
    computerMove = 'nożyce';
  }
*/

/*

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nożyce';
  }
  else printMessage

printMessage('Twój ruch to: ' + playerMove);
*/
/*

}
*/
