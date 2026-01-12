var randomNum1 =Math.floor( Math.random()*6)+1;
var randomDiceImage1 = "Dice"+randomNum1+".png";

var imageSource1 = "images/"+ randomDiceImage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

var randomNum2 =Math.floor( Math.random()*6)+1;
var randomDiceImage2 = "Dice"+randomNum2+".png";
var imageSource2 = "images/"+ randomDiceImage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);

if (randomNum1>randomNum2)
    {
     
        document.querySelector("h1").innerHTML ="🚩Play 1 Wins!";
}
else if(randomNum1==randomNum2)
    {
    document.querySelector("h1").innerHTML="😊Draw";
}
else 
    {
    document.querySelector("h1").innerHTML="🚩Play 2 Wins!";
}