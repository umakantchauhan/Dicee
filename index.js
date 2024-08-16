var player1 = document.querySelector(".img1").src="./images/dice"+ (Math.floor(Math.random() * 6) + 1) +".png";
var player2 = document.querySelector(".img2").src="./images/dice"+ (Math.floor(Math.random() * 6) + 1) +".png";

if(player1>player2) {
    document.querySelector("h1").innerHTML=("😀 Player 1 won.");
}
else if (player2>player1) {
    document.querySelector("h1").innerHTML=("😀 Player 2 won.");
}
else{
    document.querySelector("h1").innerHTML=("🤨 Draw!!!");
}