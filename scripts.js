var playerNum = 1;

const player1 = {
    'color' : '',
    'firstName': '',
    'lastName' : '',
    'firstStrength': '',
    'secondStrength': '',
    'firstWeakness': '',
    'secondWeakness': '',
    'animal': '',
    'object': ''
}

const player2 = {
    'color' : '',
    'firstName': '',
    'lastName' : '',
    'firstStrength': '',
    'secondStrength': '',
    'firstWeakness': '',
    'secondWeakness': '',
    'animal': '',
    'object': ''
}

const player3 = {
    'color' : '',
    'firstName': '',
    'lastName' : '',
    'firstStrength': '',
    'secondStrength': '',
    'firstWeakness': '',
    'secondWeakness': '',
    'animal': '',
    'object': ''
}

const player4 = {
    'color' : '',
    'firstName': '',
    'lastName' : '',
    'firstStrength': '',
    'secondStrength': '',
    'firstWeakness': '',
    'secondWeakness': '',
    'animal': '',
    'object': ''
}

const player5 = {
    'color' : '',
    'firstName': '',
    'lastName' : '',
    'firstStrength': '',
    'secondStrength': '',
    'firstWeakness': '',
    'secondWeakness': '',
    'animal': '',
    'object': ''
}

const welcomeButtonOnClick = () => {
    document.getElementById('welcomePage').style.display = 'none'
    document.getElementById('colorPage').style.display = 'block'
}
const pinkButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'pink';
  }
  if(playerNum == 2){
    player2.color = 'pink';
  }
  if(playerNum == 3){
    player3.color = 'pink';
  }
  if(playerNum == 4){
    player4.color = 'pink';
  }
  if(playerNum == 5){
    player5.color = 'pink';
  }
}
const redButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'red';
  }
  if(playerNum == 2){
    player2.color = 'red';
  }
  if(playerNum == 3){
    player3.color = 'red';
  }
  if(playerNum == 4){
    player4.color = 'red';
  }
  if(playerNum == 5){
    player5.color = 'red';
  }
}

const orangeButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'orange';
  }
  if(playerNum == 2){
    player2.color = 'orange';
  }
  if(playerNum == 3){
    player3.color = 'orange';
  }
  if(playerNum == 4){
    player4.color = 'orange';
  }
  if(playerNum == 5){
    player5.color = 'orange';
  }
}

const purpleButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'purple';
  }
  if(playerNum == 2){
    player2.color = 'purple';
  }
  if(playerNum == 3){
    player3.color = 'purple';
  }
  if(playerNum == 4){
    player4.color = 'purple';
  }
  if(playerNum == 5){
    player5.color = 'purple';
  }
}

const yellowButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'yellow';
  }
  if(playerNum == 2){
    player2.color = 'yellow';
  }
  if(playerNum == 3){
    player3.color = 'yellow';
  }
  if(playerNum == 4){
    player4.color = 'yellow';
  }
  if(playerNum == 5){
    player5.color = 'yellow';
  }
}

const blueButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'blue';
  }
  if(playerNum == 2){
    player2.color = 'blue';
  }
  if(playerNum == 3){
    player3.color = 'blue';
  }
  if(playerNum == 4){
    player4.color = 'blue';
  }
  if(playerNum == 5){
    player5.color = 'blue';
  }
}

const blackButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'black';
  }
  if(playerNum == 2){
    player2.color = 'black';
  }
  if(playerNum == 3){
    player3.color = 'black';
  }
  if(playerNum == 4){
    player4.color = 'black';
  }
  if(playerNum == 5){
    player5.color = 'black';
  }
}

const greenButtonOnClick = () => {
  if(playerNum == 1){
    player1.color = 'green';
  }
  if(playerNum == 2){
    player2.color = 'green';
  }
  if(playerNum == 3){
    player3.color = 'green';
  }
  if(playerNum == 4){
    player4.color = 'green';
  }
  if(playerNum == 5){
    player5.color = 'green';
  }
}
const colorConfirmButtonOnClick = () => {
  if(playerNum == 1){
    document.getElementById('characterPage').classList.add(player1.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.add(player1.color + "Text");
    document.getElementById('mapPage').classList.add(player1.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.add(player1.color + "Text");
  }
  else if(playerNum == 2){
    document.getElementById('characterPage').classList.remove(player1.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.remove(player1.color + "Text");
    document.getElementById('mapPage').classList.remove(player1.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.remove(player1.color + "Text");
    document.getElementById('characterPage').classList.add(player2.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.add(player2.color + "Text");
    document.getElementById('mapPage').classList.add(player2.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.add(player2.color + "Text");
  }
  else if(playerNum == 3){
    document.getElementById('characterPage').classList.remove(player2.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.remove(player2.color + "Text");
    document.getElementById('mapPage').classList.remove(player2.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.remove(player2.color + "Text");
    document.getElementById('characterPage').classList.add(player3.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.add(player3.color + "Text");
    document.getElementById('mapPage').classList.add(player3.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.add(player3.color + "Text");
  }
  else if(playerNum == 4){
    document.getElementById('characterPage').classList.remove(player3.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.remove(player3.color + "Text");
    document.getElementById('mapPage').classList.remove(player3.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.remove(player3.color + "Text");
    document.getElementById('characterPage').classList.add(player4.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.add(player4.color + "Text");
    document.getElementById('mapPage').classList.add(player4.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.add(player4.color + "Text");
  }
  else if(playerNum == 5){
    document.getElementById('characterPage').classList.remove(player4.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.remove(player4.color + "Text");
    document.getElementById('mapPage').classList.remove(player4.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.remove(player4.color + "Text");
    document.getElementById('characterPage').classList.add(player5.color + "Gradient");
    document.getElementById('characterConfirmButton').classList.add(player5.color + "Text");
    document.getElementById('mapPage').classList.add(player5.color + "Gradient");
    document.getElementById('mapConfirmButton').classList.add(player5.color + "Text");
  }
    document.getElementById('colorPage').style.display = 'none'
    document.getElementById('characterPage').style.display = 'block'
}

const characterConfirmButtonOnClick = () => {
  if(playerNum == 1){
    player1.firstName = String(document.getElementById('firstName').value)
    player1.lastName =  String(document.getElementById('lastName').value)
    player1.firstStrength =  String(document.getElementById('firstStrength').value)
    player1.secondStrength =  String(document.getElementById('secondStrength').value)
    player1.firstWeakness =  String(document.getElementById('firstWeakness').value)
    player1.secondWeakness =  String(document.getElementById('secondWeakness').value)
    player1.animal =  String(document.getElementById('animal').value)
    player1.object =  String(document.getElementById('object').value)
  }
  else if(playerNum == 2){
    player2.firstName = String(document.getElementById('firstName').value)
    player2.lastName =  String(document.getElementById('lastName').value)
    player2.firstStrength =  String(document.getElementById('firstStrength').value)
    player2.secondStrength =  String(document.getElementById('secondStrength').value)
    player2.firstWeakness =  String(document.getElementById('firstWeakness').value)
    player2.secondWeakness =  String(document.getElementById('secondWeakness').value)
    player2.animal =  String(document.getElementById('animal').value)
    player2.object =  String(document.getElementById('object').value)
  }
  else if(playerNum == 3){
    player3.firstName = String(document.getElementById('firstName').value)
    player3.lastName =  String(document.getElementById('lastName').value)
    player3.firstStrength =  String(document.getElementById('firstStrength').value)
    player3.secondStrength =  String(document.getElementById('secondStrength').value)
    player3.firstWeakness =  String(document.getElementById('firstWeakness').value)
    player3.secondWeakness =  String(document.getElementById('secondWeakness').value)
    player3.animal =  String(document.getElementById('animal').value)
    player3.object =  String(document.getElementById('object').value)
  }
  else if(playerNum == 4){
    player4.firstName = String(document.getElementById('firstName').value)
    player4.lastName =  String(document.getElementById('lastName').value)
    player4.firstStrength =  String(document.getElementById('firstStrength').value)
    player4.secondStrength =  String(document.getElementById('secondStrength').value)
    player4.firstWeakness =  String(document.getElementById('firstWeakness').value)
    player4.secondWeakness =  String(document.getElementById('secondWeakness').value)
    player4.animal =  String(document.getElementById('animal').value)
    player4.object =  String(document.getElementById('object').value)
  }
  else if(playerNum == 5){
    player5.firstName = String(document.getElementById('firstName').value)
    player5.lastName =  String(document.getElementById('lastName').value)
    player5.firstStrength =  String(document.getElementById('firstStrength').value)
    player5.secondStrength =  String(document.getElementById('secondStrength').value)
    player5.firstWeakness =  String(document.getElementById('firstWeakness').value)
    player5.secondWeakness =  String(document.getElementById('secondWeakness').value)
    player5.animal =  String(document.getElementById('animal').value)
    player5.object =  String(document.getElementById('object').value)
  }
  document.getElementById('characterPage').style.display = 'none'
  document.getElementById('mapPage').style.display = 'block'
}

const mapConfirmButtonOnClick = () => {
  if(playerNum == 1){
    player1.obstacle =  String(document.getElementById('obstacleName').value)
    player1.obstacleDescription =  String(document.getElementById('obstacleDescription').value)
    document.getElementById('colorPage').style.display = 'block'
    document.getElementById('mapPage').style.display = 'none'
    playerNum++;
  }
  else if(playerNum == 2){
    player2.obstacle =  String(document.getElementById('obstacleName').value)
    player2.obstacleDescription =  String(document.getElementById('obstacleDescription').value)
    document.getElementById('colorPage').style.display = 'block'
    document.getElementById('mapPage').style.display = 'none'
    playerNum++;
  }
  else if(playerNum == 3){
    player3.obstacle =  String(document.getElementById('obstacleName').value)
    player3.obstacleDescription =  String(document.getElementById('obstacleDescription').value)
    document.getElementById('colorPage').style.display = 'block'
    document.getElementById('mapPage').style.display = 'none'
    playerNum++;
  }
  else if(playerNum == 4){
    player4.obstacle =  String(document.getElementById('obstacleName').value)
    player4.obstacleDescription =  String(document.getElementById('obstacleDescription').value)
    document.getElementById('colorPage').style.display = 'block'
    document.getElementById('mapPage').style.display = 'none'
    playerNum++;
  }
  else if(playerNum == 5){
    player5.obstacle =  String(document.getElementById('obstacleName').value)
    player5.obstacleDescription =  String(document.getElementById('obstacleDescription').value)
    document.getElementById('timerPage').style.display = 'block'
    document.getElementById('mapPage').style.display = 'none'
    document.getElementById('timerPage').classList.add(player5.color + "Gradient");
    var threeMinutes = 60 * 3;
    var display = document.querySelector('#clock');
    startTimer(threeMinutes, display);
  }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);


        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          if(playerNum <= 1){
            document.getElementById('timerPage').style.display = 'none';
            document.getElementById('finalePage').style.display = 'block';
          }
          else{
            if(playerNum == 2){
              document.getElementById('timerPage').classList.add(player1.color + "Gradient");
              document.getElementById('timerPage').classList.add(player2.color + "Gradient");
              document.getElementById('currentObstacle').innerHTML = player1.obstacle;
              document.getElementById('currentObstacleDescription').innerHTML = player1.obstacleDescription;
            }
            else if(playerNum == 3){
              document.getElementById('timerPage').classList.add(player2.color + "Gradient");
              document.getElementById('timerPage').classList.remove(player3.color + "Gradient");
              document.getElementById('currentObstacle').innerHTML = player2.obstacle;
              document.getElementById('currentObstacleDescription').innerHTML = player2.obstacleDescription;
            }
            else if(playerNum == 4){
              document.getElementById('timerPage').classList.add(player3.color + "Gradient");
              document.getElementById('timerPage').classList.remove(player4.color + "Gradient");
              document.getElementById('currentObstacle').innerHTML = player3.obstacle;
              document.getElementById('currentObstacleDescription').innerHTML = player3.obstacleDescription;
            }
            else if(playerNum == 5){
              document.getElementById('timerPage').classList.add(player4.color + "Gradient");
              document.getElementById('currentObstacle').innerHTML = player4.obstacle;
              document.getElementById('currentObstacleDescription').innerHTML = player4.obstacleDescription;
            }
            playerNum--;
            timer = duration;
          }
        }
    }, 1000);
}


const finaleConfirmButtonOnClick = () => {
    var totalTally = document.getElementById('speakingPoints').value +
                     document.getElementById('objectPoints').value   +
                     document.getElementById('strengthPoints').value +
                     document.getElementById('weaknessPoints').value;

    var finalScore = 0;
    for(var x = 0; x < totalTally/2; x++){
      finalScore += (1 + Math.floor(Math.random() * 20));
    }

    document.getElementById('finaleForm').style.display = 'none';
    document.getElementById('finaleResult').style.display = 'block';

    if(finalScore <= 80){
      document.getElementById('finaleResult').innerHTML = 'Ouch, you failed miserably!';
    }
    else if(finalScore <= 100){
      document.getElementById('finaleResult').innerHTML = 'You failed, but...';
    }
    else if(finalScore <= 120){
      document.getElementById('finaleResult').innerHTML = 'You succeeded, but...';
    }
    else {
      document.getElementById('finaleResult').innerHTML = 'You succeeded wildly, good job!';
    }
}
