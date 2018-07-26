var score, roundScore, activePlayer, gamePlaying;

init(); //for the starting setup of the game.

//now we need to roll the dice. First select the dice and then add event to it by event listener
document.querySelector(".btn-roll").addEventListener('click', function() {
  if(gamePlaying){
    //1. random number
    var dice = Math.floor(Math.random() *6) + 1 //for random number between 1 and 6
    //2. display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block"
    //document.querySelector(".dice").style.display = "block";
    diceDOM.src = "dice-" + dice + ".png"

    //3. Update the round score if the rolled number was not 1
    if(dice !== 1){
      //add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore
    }else {
      //next player
      nextPlayer();
    }
  }
});

//HOLD function

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    //1. Add current score to Global score
    score[activePlayer] += roundScore;

    //2. Update the UI
    document.querySelector('#score-' +activePlayer).textContent = score[activePlayer];

    //3. Check if player won the game
    if(score[activePlayer] >= 20){
      document.querySelector("#name-" +activePlayer).textContent = "WINNER!!"
      document.querySelector('.dice').style.display = "none"; //dice will be invisible after winning
      document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
      document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
      gamePlaying = false;

    }else {
      // next player
      nextPlayer();
    }
  }
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if activePlayer = 0 then activePlayer = 1 else activePlayer = 0
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //to toggle the active player screen
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none'; //when the dice value is one then the dice img is set to none, and then moves to another player

}

//START NEW GAME:

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  score = [0,0] //begining score of two PLAYERS
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  //document.querySelector("#current-" + activePlayer).textContent = dice; //to select the score
  //document.querySelector is used to manipulate the values of element i web page.

  document.querySelector(".dice").style.display = "none"; // style is method and display is property. Here the dice img will be set to none.

  //set the initial value to 0
  document.getElementById("score-0").textContent = '0';
  document.getElementById("score-1").textContent = '0';
  document.getElementById("current-0").textContent = '0';
  document.getElementById("current-1").textContent = '0'
  document.getElementById('name-0').textContent = "Player 1";
  document.getElementById('name-1').textContent = "Player 2";
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active')

}
