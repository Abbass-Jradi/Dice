var player1 = 0;
var player2 = 0;

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

player1 = randomIntFromInterval(1, 6);
player2 = randomIntFromInterval(1, 6);

if( player1 === 1)
{
    document.getElementsByClassName("img1")[0].src="images/dice1.png";
}
else if(player1 === 2)
{
    document.getElementsByClassName("img1")[0].src="images/dice2.png";

}
else if(player1 === 3)
{
    document.getElementsByClassName("img1")[0].src="images/dice3.png";

}
else if(player1 === 4)
{
    document.getElementsByClassName("img1")[0].src="images/dice4.png";

}
else if(player1 === 5)
{
    document.getElementsByClassName("img1")[0].src="images/dice5.png";

}
else if(player1 === 6)
{
    document.getElementsByClassName("img1")[0].src="images/dice6.png";

}


if( player2 === 1)
{
    document.getElementsByClassName("img2")[0].src="images/dice1.png";
}
else if(player2 === 2)
{
    document.getElementsByClassName("img2")[0].src="images/dice2.png";

}
else if(player2 === 3)
{
    document.getElementsByClassName("img2")[0].src="images/dice3.png";

}
else if(player2 === 4)
{
    document.getElementsByClassName("img2")[0].src="images/dice4.png";

}
else if(player2=== 5)
{
    document.getElementsByClassName("img2")[0].src="images/dice5.png";

}
else if(player2 === 6)
{
    document.getElementsByClassName("img2")[0].src="images/dice6.png";

}