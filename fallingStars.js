var amountOfStars = screen.width/5;
var amountOfBackStars = screen.width/1.5;
var color = [];
var counter = [];

function starPlacement() {

var starDatabase = [];
var divNum = [];
var mainContainer = document.getElementById('sky');

var backStars = [];
var backStarDivNum = [];

for (var i = 0; i < amountOfStars; i++) {
       divNum[i] = document.createElement('div');
       divNum[i].className = 'star';
       divNum[i].id = ("star" + i);
       mainContainer.appendChild(divNum[i]);
       starDatabase.push(i + 1);
       color.push(i);
       counter.push(true);
       document.getElementById("star" + i).style.left = (Math.random()*99) + "%";
       document.getElementById("star" + i).style.top = (Math.random()*98) + "%";

     }

for (var i = 0; i < amountOfBackStars; i++) {
      backStarDivNum[i] = document.createElement('div');
      backStarDivNum[i].style.left = (Math.random()*99) + "%";
      backStarDivNum[i].style.top = (Math.random()*98) + "%";
      backStarDivNum[i].className = 'backStar';
      mainContainer.appendChild(backStarDivNum[i]);
      backStars.push(i + 1);
    }
}


function stars() {

for (var i = 0; i < color.length; i++) {

  if (counter[i] === true) {
     if (color[i] <= 248 ) {
       color[i] = color[i] + (Math.floor(Math.random() * 10 ) + 1);
       document.getElementById("star" + i).style.backgroundColor = "rgb("+color[i]+", "+color[i]+", "+color[i]+")";
     }
     else if (color[i] === undefined) {
       color[i] = (Math.floor(Math.random() * 256) + 1);
     }
     else {
       counter[i] = false;
       color[i] = color[i] - (Math.floor(Math.random() * 10 ) + 1);
     }
   }
   else {
     if (color[i] >= 10) {
       color[i] = color[i] - (Math.floor(Math.random() * 10 ) + 1);
       document.getElementById("star" + i).style.backgroundColor = "rgb("+color[i]+", "+color[i]+", "+color[i]+")";
     }
     else {
       color[i] = color[i] + (Math.floor(Math.random() * 10 ) + 1);
       counter[i] = true;
       document.getElementById("star" + i).style.left = (Math.random()*99) + "%";
       document.getElementById("star" + i).style.top = (Math.random()*98) + "%";
     }
   }
}
}

//
// var deg =  Math.floor( Math.random() * 360); /*360*/
// var red = 0;
// var backCounter = true;
//
// function background() {
//
//   if (deg === 360) {
//     deg = 1;
//   }
//   else {
//     deg = deg + 1;
//   }
//
//
//     if (backCounter === true) {
//       if (red <= 128) {
//         red = red + Math.floor( (Math.random() * 10) + 1);
//       }
//       else {
//         backCounter = false;
//       }
//     }
//     else {
//       if (red >= 9) {
//         red = red - Math.floor( (Math.random() * 10) + 1);
//       }
//       else {
//         backCounter = true;
//       }
//     }
//
// document.body.style.background = "linear-gradient(" + deg + "deg, rgb("+ red +",0,0), rgb(0,0,0))";
// }
