var amountOfStars = Math.floor(Math.random()*(75 - 40 + 1) + 40);

function starPlacement() {

var starDatabase = [];
var divNum = [];
var mainContainer = document.getElementById('sky');

for (var i = 0; i < amountOfStars; i++) {
       divNum[i] = document.createElement('div');
       divNum[i].style.left = (Math.random()*100+1) + "%";
       divNum[i].style.top = (Math.random()*100+1) + "%";
       divNum[i].className = 'star';
       divNum[i].id = (i + 1);
       mainContainer.appendChild(divNum[i]);
       starDatabase.push(i + 1);
     }
}

var color = 0;
var counter = true;

function stars() {

  if (counter === true) {
     if (color <= 246) {
       color = color + Math.floor( (Math.random() * 10) + 1);
     }
     else {
       counter = false;
     }
   }
   else {
     if (color >= 9) {
       color = color - Math.floor( (Math.random() * 10) + 1);
     }
     else {
       counter = true;
     }
   }
  for (var i = 0; i < amountOfStars; i++) {
document.getElementsByClassName('star')[i].style.backgroundColor = "rgb("+color+", "+color+", "+color+")";
}
}
