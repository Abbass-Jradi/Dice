var player1 = 0;
var player2 = 0;

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

player1 = randomIntFromInterval(1, 6);
player2 = randomIntFromInterval(1, 6);