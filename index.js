//  Math.floor(Math.random()*7); / Math.floor(Math.random()*7)+1; make diff when img ke baat ho +1 wala load image perfectly.


document.getElementsByTagName("h1")[0].style.color= 'pink';

var randomNumber1 = Math.floor(Math.random()*7);   // 1-6

// concatinate  & to map dice with Randnum
var randomDiceImage = "dice" + randomNumber1 + ".png";   //   dice1-6.png

var randomImageSource = "images/" + randomDiceImage;     // full-src  images/dice1-6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// for dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// var result = document.querySelector("h1");
// console.log(result);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 WIN";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WIN";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}