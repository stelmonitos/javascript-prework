{
function playGame(playerInput)
{
  clearMessages();
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
    const randomNumber = Math.floor(Math.random() * 3 + 1),
          computerMove = getMoveName(randomNumber),
          playerMove = getMoveName(playerInput);
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

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
}
  const playRock = document.getElementById('play-rock'),
        playPaper = document.getElementById('play-paper'),
        playScissors = document.getElementById('play-scissors');

  playRock.addEventListener('click', function(){playGame(1)});
  playPaper.addEventListener('click', function(){playGame(2)});
  playScissors.addEventListener('click', function(){playGame(3)});
}
