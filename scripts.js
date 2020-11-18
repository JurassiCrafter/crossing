const player = {
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
    player.color = 'pink';
}
const redButtonOnClick = () => {
    player.color = 'red';
}

const orangeButtonOnClick = () => {
    player.color = 'orange';
}

const purpleButtonOnClick = () => {
    player.color = 'purple';
}

const yellowButtonOnClick = () => {
    player.color = 'yellow';
}

const blueButtonOnClick = () => {
    player.color = 'blue';
}

const blackButtonOnClick = () => {
    player.color = 'black';
}

const greenButtonOnClick = () => {
    player.color = 'green';
}
const colorConfirmButtonOnClick = () => {
    document.getElementById('colorPage').style.display = 'none'
    document.getElementById('characterPage').style.display = 'block'
}
const characterConfirmButtonOnClick = () => {
    player.firstName = String(document.getElementById('firstName').value)
    player.lastName =  String(document.getElementById('lastName').value)
    player.firstStrength =  String(document.getElementById('firstStrength').value)
    player.secondStrength =  String(document.getElementById('secondStrength').value)
    player.firstWeakness =  String(document.getElementById('firstWeakness').value)
    player.secondWeakness =  String(document.getElementById('secondWeakNess').value)
    player.animal =  String(document.getElementById('animal').value)
    player.object =  String(document.getElementById('object').value)
    console.log(player)
}
