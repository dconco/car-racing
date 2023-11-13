let input = (document.getElementById('input'));
let msg = (document.getElementById('msg'));
let msgBox1 = (document.getElementById("msgbox"));
let msgBox2 = (document.getElementById("msgbox2"));
let btn = (document.getElementById("btn"));
let listName = (document.getElementById("listname"));
let nav = (document.getElementById('nav'));
let li1 = (document.getElementById("li1"));
let li3 = (document.getElementById("li2"));
let logBox2 = (document.getElementById("logbox2"));
let setbox2 = (document.getElementById('setbox2'));
let toggle2 = (document.getElementById('toggle2'));
let toggle3 = (document.getElementById('toggle3'));
let toggle5 = (document.getElementById('toggle5'));
let toggle6 = (document.getElementById('toggle6'));
let bluecar = (document.getElementById('bluecar'));
let greencar = (document.getElementById('greencar'));
let whitecar = (document.getElementById('whitecar'));
let yellowcar = (document.getElementById('yellowcar'));
let garage2 = (document.getElementById('garage2'));
let selectcar = (document.getElementById('selectcar'));
let selectcar2 = (document.getElementById('selectcar2'));
let selectcar3 = (document.getElementById('selectcar3'));
let selectcar4 = (document.getElementById('selectcar4'));
let carcash = (document.getElementById('carcash'));
let carcash3 = (document.getElementById('carcash3'));
let carcash5 = (document.getElementById('carcash5'));
let selectb = (document.getElementById('select2'));
let selectc = (document.getElementById('select3'));
let selectd = (document.getElementById('select4'));
let coinsNum = (document.getElementById('coins_num').innerHTML);
let realcoins = coinsNum;
let roadImg = (document.getElementById('roadimg'));
let roadImg2 = (document.getElementById('roadimg2'));
let game = (document.getElementById('game'));
let line = (document.getElementById('line'));
let line2 = (document.getElementById('line2'));
let line3 = (document.getElementById('line3'));
let line4 = (document.getElementById('line4'));
let opp1 = (document.getElementById('opp1'));
let opp2 = (document.getElementById('opp2'));
let opp3 = (document.getElementById('opp3'));
let opp4 = (document.getElementById('opp4'));
let opp5 = (document.getElementById('opp5'));
let opp6 = (document.getElementById('opp6'));
let opp7 = (document.getElementById('opp7'));
let opp8 = (document.getElementById('opp8'));
let opp9 = (document.getElementById('opp9'));
let oppcars = (document.getElementById('oppcars'));
let oppcars2 = (document.getElementById('oppcars2'));
let oppcars3 = (document.getElementById('oppcars3'));
let audio = (document.getElementById('audio'));
let bullet = (document.getElementById('bullet').style);
let road = (document.getElementById('road').style);
let progress = (document.getElementById('progress').style);
let pro = (document.getElementById('pro').style);
let proBlur = (document.getElementById('problur').style);
let airPlane = (document.getElementById('airplane').style);



   opp1.style.visibility = "hidden";
   opp2.style.visibility = "hidden";
   opp3.style.visibility = "hidden";
   opp4.style.visibility = "hidden";
   opp5.style.visibility = "hidden";
   opp6.style.visibility = "hidden";
   opp7.style.visibility = "hidden";
   opp8.style.visibility = "hidden";
   opp9.style.visibility = "hidden";


function testing() {
   if (bullet.visibility === "visible") {
      bullet.visibility = "hidden";
      bullet.animationPlayState = "paused";
   }
}
setInterval(testing, 1000);

let prot = 0;
function realBullet() {
   if (bullet.visibility !== "visible") {
      pro.animationDuration = "2s";
      pro.transitionDuration = "2s";
      bullet.visibility = "visible";
      bullet.animationPlayState = "running";
      if (prot !== 100) {
         prot+=5;
         pro.height = prot+"%";
         pro.animationDuration = "2s";
         pro.transitionDuration = "2s";
         
         opp1.style.visibility = "visible";
         opp2.style.visibility = "visible";
         opp3.style.visibility = "visible";
         opp4.style.visibility = "visible";
         opp5.style.visibility = "visible";
         opp6.style.visibility = "visible";
         opp7.style.visibility = "visible";
         opp8.style.visibility = "visible";
         opp9.style.visibility = "visible";
         opp1.style.transitionDelay = "2s";
         opp2.style.transitionDelay = "10s";
         opp3.style.transitionDelay = "20s";
         opp4.style.transitionDelay = "3s";
         opp5.style.transitionDelay = "10s";
         opp6.style.transitionDelay = "20s";
         opp7.style.transitionDelay = "3s";
         opp8.style.transitionDelay = "10s";
         opp9.style.transitionDelay = "20s";
      }
      if (prot === 100) {
         pro.animationPlayState = "running";
         proBlur.visibility = "visible";
         proBlur.animationPlayState = "running";
         pro.borderRadius = "20pc 20pc 20pc 20pc";
      }
   }
}

function protBlur() {
   if (prot === 100) {
      pro.animationPlayState = "paused";
      prot +=- 100;
      pro.height = prot+"%";
      proBlur.visibility = "hidden";
      proBlur.transitionDelay = "0s";
      proBlur.transitionDuration = "0s";
      proBlur.animationPlayState = "paused";
      pro.transitionDuration = "2s";
      pro.borderRadius = "0pc 0pc 20pc 20pc";
      opp1.style.visibility = "hidden";
      opp2.style.visibility = "hidden";
      opp3.style.visibility = "hidden";
      opp4.style.visibility = "hidden";
      opp5.style.visibility = "hidden";
      opp6.style.visibility = "hidden";
      opp7.style.visibility = "hidden";
      opp8.style.visibility = "hidden";
      opp9.style.visibility = "hidden";
      opp1.style.transitionDelay = "0.2s";
      opp2.style.transitionDelay = "0.2s";
      opp3.style.transitionDelay = "0.2s";
      opp4.style.transitionDelay = "0.2s";
      opp5.style.transitionDelay = "0.2s";
      opp6.style.transitionDelay = "0.2s";
      opp7.style.transitionDelay = "0.2s";
      opp8.style.transitionDelay = "0.2s";
      opp9.style.transitionDelay = "0.2s";
      if (airPlane.top != "-40%") {
         airPlane.top = "-40%";
         airPlane.transitionDuration = "1s";
      }else if(airPlane.top != "110%") {
         airPlane.top = "110%";
         airPlane.transitionDuration = "1s";
      }
   }
}

function shoot() {
   realBullet();
   /****    Left    ****/
   if (roadImg.style.left === "0.5pc") {
      bullet.left = "1.6pc";
      realBullet();
   }
   /****    Center    ****/
   if (roadImg.style.left === "7.3pc") {
      bullet.left = "8.3pc";
      realBullet();
   }
   /****    Right    ****/
   if (roadImg.style.left === "14.7pc") {
      bullet.left = "15.8pc";
      realBullet();
   }
   /****    Center    ****/
   if (roadImg.style.left !== "0.5pc" && roadImg.style.left !== "14.7pc") {
      bullet.left = "8.3pc";
      realBullet();
   }
}

function randomCars() {
   const car1 = (opp1.src = "img/opponent_car1.png");
   const car2 = (opp1.src = "img/opponent_car2.png");
   const car3 = (opp1.src = "img/opponent_car3.png");
   const car4 = (opp1.src = "img/opponent_car4.png");
   const car5 = (opp1.src = "img/opponent_car5.png");
   const car6 = (opp1.src = "img/opponent_car6.png");
   const car7 = (opp1.src = "img/opponent_car7.png");
   const car8 = (opp1.src = "img/opponent_car8.png");
   const car9 = (opp1.src = "img/opponent_car9.png");
   const car10 = (opp1.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp1.src = randomCarsFromArray;
   car3.style.width = "8pc";
   car4.style.width = "8pc";
   car5.style.height = "3pc";
   car8.style.height = "8pc";
}
setInterval(randomCars, 10000);


function secondRandomCars() {
   const car1 = (opp2.src = "img/opponent_car1.png");
   const car2 = (opp2.src = "img/opponent_car2.png");
   const car3 = (opp2.src = "img/opponent_car3.png");
   const car4 = (opp2.src = "img/opponent_car4.png");
   const car5 = (opp2.src = "img/blue_car_backview.png");
   const car6 = (opp2.src = "img/opponent_car6.png");
   const car7 = (opp2.src = "img/opponent_car7.png");
   const car8 = (opp2.src = "img/opponent_car8.png");
   const car9 = (opp2.src = "img/opponent_car9.png");
   const car10 = (opp2.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp2.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car5.style.width = "5pc";
   car3.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "5pc";
}
setInterval(secondRandomCars, 10000);


function thirdRandomCars() {
   const car1 = (opp3.src = "img/opponent_car1.png");
   const car2 = (opp3.src = "img/opponent_car2.png");
   const car3 = (opp3.src = "img/opponent_car3.png");
   const car4 = (opp3.src = "img/opponent_car4.png");
   const car5 = (opp3.src = "img/opponent_car5.png");
   const car6 = (opp3.src = "img/opponent_car6.png");
   const car7 = (opp3.src = "img/opponent_car7.png");
   const car8 = (opp3.src = "img/opponent_car8.png");
   const car9 = (opp3.src = "img/opponent_car9.png");
   const car10 = (opp3.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp3.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(thirdRandomCars, 10000);

function fourthRandomCars() {
   const car1 = (opp4.src = "img/opponent_car1.png");
   const car2 = (opp4.src = "img/opponent_car2.png");
   const car3 = (opp4.src = "img/opponent_car3.png");
   const car4 = (opp4.src = "img/opponent_car4.png");
   const car5 = (opp4.src = "img/opponent_car5.png");
   const car6 = (opp4.src = "img/opponent_car6.png");
   const car7 = (opp4.src = "img/opponent_car7.png");
   const car8 = (opp4.src = "img/opponent_car8.png");
   const car9 = (opp4.src = "img/opponent_car9.png");
   const car10 = (opp4.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp4.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(fourthRandomCars, 10000);

function fifthRandomCars() {
   const car1 = (opp5.src = "img/opponent_car1.png");
   const car2 = (opp5.src = "img/opponent_car2.png");
   const car3 = (opp5.src = "img/opponent_car3.png");
   const car4 = (opp5.src = "img/opponent_car4.png");
   const car5 = (opp5.src = "img/opponent_car5.png");
   const car6 = (opp5.src = "img/opponent_car6.png");
   const car7 = (opp5.src = "img/opponent_car7.png");
   const car8 = (opp5.src = "img/opponent_car8.png");
   const car9 = (opp5.src = "img/opponent_car9.png");
   const car10 = (opp5.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp5.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(fifthRandomCars, 10000);

function sixthRandomCars() {
   const car1 = (opp6.src = "img/opponent_car1.png");
   const car2 = (opp6.src = "img/opponent_car2.png");
   const car3 = (opp6.src = "img/opponent_car3.png");
   const car4 = (opp6.src = "img/opponent_car4.png");
   const car5 = (opp6.src = "img/opponent_car5.png");
   const car6 = (opp6.src = "img/opponent_car6.png");
   const car7 = (opp6.src = "img/opponent_car7.png");
   const car8 = (opp6.src = "img/opponent_car8.png");
   const car9 = (opp6.src = "img/opponent_car9.png");
   const car10 = (opp6.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp6.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(sixthRandomCars, 10000);

function seventhRandomCars() {
   const car1 = (opp7.src = "img/opponent_car1.png");
   const car2 = (opp7.src = "img/opponent_car2.png");
   const car3 = (opp7.src = "img/opponent_car3.png");
   const car4 = (opp7.src = "img/opponent_car4.png");
   const car5 = (opp7.src = "img/opponent_car5.png");
   const car6 = (opp7.src = "img/opponent_car6.png");
   const car7 = (opp7.src = "img/opponent_car7.png");
   const car8 = (opp7.src = "img/opponent_car8.png");
   const car9 = (opp7.src = "img/opponent_car9.png");
   const car10 = (opp7.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp7.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(seventhRandomCars, 10000);

function eighthRandomCars() {
   const car1 = (opp8.src = "img/opponent_car1.png");
   const car2 = (opp8.src = "img/opponent_car2.png");
   const car3 = (opp8.src = "img/opponent_car3.png");
   const car4 = (opp8.src = "img/opponent_car4.png");
   const car5 = (opp8.src = "img/opponent_car5.png");
   const car6 = (opp8.src = "img/opponent_car6.png");
   const car7 = (opp8.src = "img/opponent_car7.png");
   const car8 = (opp8.src = "img/opponent_car8.png");
   const car9 = (opp8.src = "img/opponent_car9.png");
   const car10 = (opp8.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp8.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(eighthRandomCars, 10000);

function ninethRandomCars() {
   const car1 = (opp9.src = "img/opponent_car1.png");
   const car2 = (opp9.src = "img/opponent_car2.png");
   const car3 = (opp9.src = "img/opponent_car3.png");
   const car4 = (opp9.src = "img/opponent_car4.png");
   const car5 = (opp9.src = "img/opponent_car5.png");
   const car6 = (opp9.src = "img/opponent_car6.png");
   const car7 = (opp9.src = "img/opponent_car7.png");
   const car8 = (opp9.src = "img/opponent_car8.png");
   const car9 = (opp9.src = "img/opponent_car9.png");
   const car10 = (opp9.src = "img/opponent_car10.png");

   const arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

   const lengthOfArray = arrayOfCars.length;
   const randomNumberFromArray = Math.round(Math.random()*(lengthOfArray-1));
   const randomCarsFromArray = arrayOfCars[randomNumberFromArray];

   opp9.src = randomCarsFromArray;
   car1.style.height = "9pc";
   car4.style.height = "8pc";
   car3.style.height = "8pc";
   car5.style.height = "3pc";
   car6.style.height = "8pc";
   car7.style.height = "11pc";
   car8.style.height = "8pc";
   car10.style.height = "8pc";
}
setInterval(ninethRandomCars, 10000);



function load() {
   audio.play();
   const toggles = localStorage.getItem("toggle");
   if (toggles) {
      audio.pause();
   }
   /*var date = new Date();
   if (hrs == 20) {
   var hrs = date.getHours();
      alert("Congratulations, You've Received 10 Coins Of Your Daily Bonuses");
      
   }else if (hrs > 10) {
      console.log("hello"+hrs);
   }
   if( hrs > 25 )
   clearInterval(bonusTime); // clearing interval*/
}

/*var bonusTime = setInterval(load, 1000); // setting interval*/

function quit() {
   game.style.visibility = "hidden";
   
   prot = 0;
   pro.height = prot+"%";
   proBlur.transitionDelay = "0s";
   proBlur.transitionDuration = "0s";
   proBlur.animationPlayState = "paused";
   pro.transitionDuration = "0s";
   pro.transitionDelay = "0s";
   pro.animationPlayState = "paused";
   proBlur.visibility = "hidden";
   bullet.visibility = "hidden";
   oppcars.style.visibility = "hidden";
   oppcars2.style.visibility = "hidden";
   oppcars3.style.visibility = "hidden";
   opp1.style.visibility = "hidden";
   opp2.style.visibility = "hidden";
   opp3.style.visibility = "hidden";
   opp4.style.visibility = "hidden";
   opp5.style.visibility = "hidden";
   opp6.style.visibility = "hidden";
   opp7.style.visibility = "hidden";
   opp8.style.visibility = "hidden";
   opp9.style.visibility = "hidden";
   bullet.transitionDelay = "0s";
   opp1.style.transitionDelay = "0s";
   opp2.style.transitionDelay = "0s";
   opp3.style.transitionDelay = "0s";
   opp4.style.transitionDelay = "0s";
   opp5.style.transitionDelay = "0s";
   opp6.style.transitionDelay = "0s";
   opp7.style.transitionDelay = "0s";
   opp8.style.transitionDelay = "0s";
   opp9.style.transitionDelay = "0s";
   ms = 100;
   secs = 60;
   mins = 03;
}
function left() {
   roadImg.style.left = "0.5pc";
   roadImg.style.transitionDuration = "0.3s";
}
function right() {
   roadImg.style.left = "14.7pc";
   roadImg.style.transitionDuration = "0.3s";
}
function center() {
   roadImg.style.left = "7.3pc";
   roadImg.style.transitionDuration = "0.3s";
}

   var mins = 03;
   var secs = 60;
   var ms = 100;

function games() {
   ms--;
   document.getElementById("ms").innerHTML = ms;
   if (ms == 0) {
      ms = 100;
      secs--;
      document.getElementById("secs").innerHTML = secs;
   }
   if (secs == 0) {
      secs = 60;
      mins--;
      document.getElementById("mins").innerHTML = mins;
   }
   if (secs == 1) {
      document.getElementById("secs").innerHTML = "0"+secs;
   }
   if (mins == -1) {
      clearTimer();
      ms = 0;
      secs = 0;
      mins = 0;
      let coinsNumer = (document.getElementById('coins_num').innerHTML = coinsNum+++25);
      coinsNum = coinsNumer;
      localStorage.setItem("gamecoins", coinsNum);
      alert("You've Successfully Completed Your Game, 25+ Coins Has Been Added To Your Coins!");
   }
   if (ms < 10) {
      document.getElementById("ms").innerHTML = "0"+ms;
   }
   if (secs < 10 || secs == 1) {
      document.getElementById("secs").innerHTML = "0"+secs;
   }
   if (mins < 10) {
      document.getElementById("mins").innerHTML = "0"+mins;
   }
}
function clearTimer() {
   clearInterval(timer);
}
timer = setInterval(games, 10);

function playbtn() {
   game.style.visibility = "visible";
   
   if (bluecar.style.visibility === "visible") {
      roadImg2.src = "img/opponent_car1.png";
      line.style.animationDuration = "1.3s";
      line2.style.animationDuration = "1.3s";
      line3.style.animationDuration = "1.3s";
      line4.style.animationDuration = "1.3s";
   }
   if (greencar.style.visibility === "visible") {
      roadImg2.src = "img/green_car_backview.png";
      line.style.animationDuration = "1.2s";
      line2.style.animationDuration = "1.2s";
      line3.style.animationDuration = "1.2s";
      line4.style.animationDuration = "1.2s";
   }
   if (whitecar.style.visibility === "visible") {
      roadImg2.src = "img/white_car_backview.png";
      line.style.animationDuration = "1.1s";
      line2.style.animationDuration = "1.1s";
      line3.style.animationDuration = "1.1s";
      line4.style.animationDuration = "1.1s";
   }
   if (yellowcar.style.visibility === "visible") {
      roadImg2.src = "img/yellow_car_backview.png";
      line.style.animationDuration = "1s";
      line2.style.animationDuration = "1s";
      line3.style.animationDuration = "1s";
      line4.style.animationDuration = "1s";
   }
   if (opp1.style.visibility === "hidden") {
      opp1.style.visibility = "visible";
      opp1.style.transitionDelay = "2s";
   }
   if (opp2.style.visibility === "hidden") {
      opp2.style.transitionDelay = "10s";
      opp2.style.visibility = "visible";
   }
   if (opp3.style.visibility === "hidden") {
      opp3.style.transitionDelay = "20s";
      opp3.style.visibility = "visible";
   }
   if (opp4.style.visibility === "hidden") {
      opp4.style.visibility = "visible";
      opp4.style.transitionDelay = "3s";
   }
   if (opp5.style.visibility === "hidden") {
      opp5.style.transitionDelay = "10s";
      opp5.style.visibility = "visible";
   }
   if (opp6.style.visibility === "hidden") {
      opp6.style.transitionDelay = "20s";
      opp6.style.visibility = "visible";
   }
   if (opp7.style.visibility === "hidden") {
      opp7.style.visibility = "visible";
      opp7.style.transitionDelay = "3s";
   }
   if (opp8.style.visibility === "hidden") {
      opp8.style.transitionDelay = "10s";
      opp8.style.visibility = "visible";
   }
   if (opp9.style.visibility === "hidden") {
      opp9.style.transitionDelay = "20s";
      opp9.style.visibility = "visible";
   }
}

function buy1() {
   if (coinsNum >= 1000) {
      carcash.style.visibility = "hidden";
      selectb.style.visibility = "visible";
      let coinsNumer = (document.getElementById('coins_num').innerHTML = coinsNum-1000);
      coinsNum = coinsNumer;
      localStorage.setItem("coinsnum", "coinsnum");
      localStorage.setItem("coinsnume", "coinsnume");
   }else {
      alert("You Do Not Have Enough Coins To Buy This Car!");
   }
}

function buy2() {
   if (coinsNum >= 3000) {
      carcash3.style.visibility = "hidden";
      selectc.style.visibility = "visible";
      let coinsNumer = (document.getElementById('coins_num').innerHTML = coinsNum-3000);
      coinsNum = coinsNumer;
      localStorage.setItem("coinsnumb", "coinsnumb");
      localStorage.setItem("coinsnumc", "coinsnumc");
   }else {
      alert("You Do Not Have Enough Coins To Buy This Car!");
   }
}

function buy3() {
   if (coinsNum >= 1000) {
      carcash5.style.visibility = "hidden";
      selectd.style.visibility = "visible";
      let coinsNumer = (document.getElementById('coins_num').innerHTML = coinsNum-7000);
      coinsNum = coinsNumer;
      localStorage.setItem("coinsnumd", "coinsnumd");
      localStorage.setItem("coinsnumf", "coinsnumf");
   }else {
      alert("You Do Not Have Enough Coins To Buy This Car!");
   }
}

function select() {
   selectcar.style.visibility = "visible";
   selectcar2.style.visibility = "hidden";
   selectcar3.style.visibility = "hidden";
   selectcar4.style.visibility = "hidden";
   bluecar.style.visibility = "visible";
   greencar.style.visibility = "hidden";
   whitecar.style.visibility = "hidden";
   yellowcar.style.visibility = "hidden";
   localStorage.setItem("select", "select");
   localStorage.removeItem("select2");
   localStorage.removeItem("select3");
   localStorage.removeItem("select4");
}

function select2() {
   selectcar.style.visibility = "hidden";
   selectcar2.style.visibility = "visible";
   selectcar3.style.visibility = "hidden";
   selectcar4.style.visibility = "hidden";
   bluecar.style.visibility = "hidden";
   greencar.style.visibility = "visible";
   whitecar.style.visibility = "hidden";
   yellowcar.style.visibility = "hidden";
   localStorage.setItem("select2", "select2");
   localStorage.removeItem("select");
   localStorage.removeItem("select3");
   localStorage.removeItem("select4");
}

function select3() {
   selectcar.style.visibility = "hidden";
   selectcar2.style.visibility = "hidden";
   selectcar3.style.visibility = "visible";
   selectcar4.style.visibility = "hidden";
   bluecar.style.visibility = "hidden";
   greencar.style.visibility = "hidden";
   whitecar.style.visibility = "visible";
   yellowcar.style.visibility = "hidden";
   localStorage.setItem("select3", "select3");
   localStorage.removeItem("select");
   localStorage.removeItem("select2");
   localStorage.removeItem("select4");
}

function select4() {
   selectcar.style.visibility = "hidden";
   selectcar2.style.visibility = "hidden";
   selectcar3.style.visibility = "hidden";
   selectcar4.style.visibility = "visible";
   bluecar.style.visibility = "hidden";
   greencar.style.visibility = "hidden";
   whitecar.style.visibility = "hidden";
   yellowcar.style.visibility = "visible";
   localStorage.setItem("select4", "select4");
   localStorage.removeItem("select");
   localStorage.removeItem("select2");
   localStorage.removeItem("select3");
}
function garage() {
   garage2.style.visibility = "visible";
}

function back() {
   garage2.style.visibility = "hidden";
   selectcar.style.visibility = "hidden";
   selectcar2.style.visibility = "hidden";
   selectcar3.style.visibility = "hidden";
   selectcar4.style.visibility = "hidden";
   selectb.style.visibility = "hidden";
   selectc.style.visibility = "hidden";
   selectd.style.visibility = "hidden";
}

function settings() {
   setbox2.style.visibility = "visible";
}

function toggle1() {
   if (toggle3.style.left !== "53%") {
      audio.play();
      toggle3.style.left = "53%";
      toggle2.style.backgroundColor = "#005c08";
      toggle3.style.backgroundColor = "#3a8533";
      toggle2.style.transitionDuration = "0.5s";
      toggle3.style.transitionDuration = "0.5s";
      localStorage.removeItem("toggle");
   }else if (toggle3.style.left !== "0") {
      audio.pause();
      toggle3.style.left = "0";
      toggle2.style.backgroundColor = "#242424";
      toggle3.style.backgroundColor = "#727272";
      toggle2.style.transitionDuration = "0.5s";
      toggle3.style.transitionDuration = "0.5s";
      localStorage.setItem("toggle", "toggle");
   }
}

function toggle4() {
   if (toggle6.style.left !== "53%") {
      toggle6.style.left = "53%";
      toggle5.style.backgroundColor = "#005c08";
      toggle6.style.backgroundColor = "#3a8533";
      toggle5.style.transitionDuration = "0.5";
      toggle6.style.transitionDuration = "0.5s";
      localStorage.removeItem("toggler");
   }else if (toggle6.style.left !== "0") {
      toggle6.style.left = "0";
      toggle5.style.backgroundColor = "#242424";
      toggle6.style.backgroundColor = "#727272";
      toggle5.style.transitionDuration = "0.5s";
      toggle6.style.transitionDuration = "0.5s";
      localStorage.setItem("toggler", "toggler");
   }
}

function setclose() {
   setbox2.style.visibility = "hidden";
   toggle2.style.transitionDuration = "0s";
   toggle3.style.transitionDuration = "0s";
   toggle5.style.transitionDuration = "0s";
   toggle6.style.transitionDuration = "0s";
}

function logoutbtn() {
   localStorage.clear();
}

function logoutcancel() {
   logbox2.style.visibility = "hidden";
}

function li2() {
   logbox2.style.visibility = "visible";
}


function users() {
   if (nav.style.width !== "6.6pc") {
      nav.style.width = "6.6pc";
      nav.style.transitionDuration = "1s";
      li1.style.transitionDuration = "1s";
      li3.style.transitionDuration = "1s";
      listName.style.transitionDuration = "1s";
      li1.style.fontSize = "15px";
      li3.style.fontSize = "15px";
      listName.style.fontSize = "15px";
   }else if (nav.style.width !== "0") {
      nav.style.width = "0";
      nav.style.transitionDuration = "1s";
      li1.style.transitionDuration = "1s";
      li3.style.transitionDuration = "1s";
      listName.style.transitionDuration = "1s";
      li1.style.fontSize = "0";
      li3.style.fontSize = "0";
      listName.style.fontSize = "0";
   }
}

   
  
window.onload = function() {
   listName.innerHTML = (localStorage.getItem("realname"));
   document.addEventListener('contextmenu', event => event.preventDefault());
   const msgName = (localStorage.getItem("realname"));
   if(msgName){
      alert('Hello ' + msgName + ', You\'re Welcomed Back To Speed Racing Fight Game!');
   }else {
      let a = msgBox1.style.visibility = "visible";
      let b = msgBox2.style.visibility = "visible";
   }
   const toggles = (localStorage.getItem("toggle"));
   if (toggles) {
      toggle3.style.left = "0";
      toggle2.style.backgroundColor = "#242424";
      toggle3.style.backgroundColor = "#727272";
   }
   const togglero = (localStorage.getItem("toggler"));
   if (togglero) {
      toggle6.style.left = "0";
      toggle5.style.backgroundColor = "#242424";
      toggle6.style.backgroundColor = "#727272";
   }
   const select = (localStorage.getItem("select"));
   const select2 = (localStorage.getItem("select2"));
   const select3 = (localStorage.getItem("select3"));
   const select4 = (localStorage.getItem("select4"));
   if (select) {
      selectcar2.style.visibility = "hidden";
      selectcar3.style.visibility = "hidden";
      selectcar4.style.visibility = "hidden";
      bluecar.style.visibility = "visible";
      greencar.style.visibility = "hidden";
      whitecar.style.visibility = "hidden";
      yellowcar.style.visibility = "hidden";
      localStorage.removeItem("select2");
      localStorage.removeItem("select3");
      localStorage.removeItem("select4");
   }
   if (select2) {
      selectcar.style.visibility = "hidden";
      selectcar2.style.visibility = "visible";
      selectcar3.style.visibility = "hidden";
      selectcar4.style.visibility = "hidden";
      bluecar.style.visibility = "hidden";
      greencar.style.visibility = "visible";
      whitecar.style.visibility = "hidden";
      yellowcar.style.visibility = "hidden";
      localStorage.removeItem("select");
      localStorage.removeItem("select3");
      localStorage.removeItem("select4");
   }
   if (select3) {
      selectcar.style.visibility = "hidden";
      selectcar2.style.visibility = "hidden";
      selectcar3.style.visibility = "visible";
      selectcar4.style.visibility = "hidden";
      bluecar.style.visibility = "hidden";
      greencar.style.visibility = "hidden";
      whitecar.style.visibility = "visible";
      yellowcar.style.visibility = "hidden";
      localStorage.removeItem("select");
      localStorage.removeItem("select2");
      localStorage.removeItem("select4");
   }
   if (select4) {
      selectcar.style.visibility = "hidden";
      selectcar2.style.visibility = "hidden";
      selectcar3.style.visibility = "hidden";
      selectcar4.style.visibility = "visible";
      bluecar.style.visibility = "hidden";
      greencar.style.visibility = "hidden";
      whitecar.style.visibility = "hidden";
      yellowcar.style.visibility = "visible";
      localStorage.removeItem("select");
      localStorage.removeItem("select2");
      localStorage.removeItem("select3");
   }
   let coinsnum = localStorage.getItem("coinsnum");
   if (coinsnum) {
      carcash.style.visibility = "hidden";
      selectb.style.visibility = "visible";
   }
   let cin = localStorage.getItem("coinsnume");
   if (cin) {
      let coinsNumer = (document.getElementById('coins_num').innerHTML);
      let coinsNumers = (document.getElementById('coins_num').innerHTML = coinsNumer-1000);
      coinsNumer = coinsNumers;
   }
   
   
   let coinsnumb = localStorage.getItem("coinsnumb");
   if (coinsnumb) {
      carcash3.style.visibility = "hidden";
      selectc.style.visibility = "visible";
   }
   let cina = localStorage.getItem("coinsnumc");
   if (cina) {
      let coinsNumer = (document.getElementById('coins_num').innerHTML);
      let coinsNumers = (document.getElementById('coins_num').innerHTML = coinsNumer-3000);
      coinsNumer = coinsNumers;
   }
   
   
   let coinsnumd = localStorage.getItem("coinsnumd");
   if (coinsnumd) {
      carcash5.style.visibility = "hidden";
      selectd.style.visibility = "visible";
   }
   let cinf = localStorage.getItem("coinsnumf");
   if (cinf) {
      let coinsNumer = (document.getElementById('coins_num').innerHTML);
      let coinsNumers = (document.getElementById('coins_num').innerHTML = coinsNumer-7000);
      coinsNumer = coinsNumers;
   }
   let ab = localStorage.getItem("gamecoins");
   if (ab) {
      document.getElementById("coins_num").innerHTML = coinsNum+++25;
   }
   
   
};
function msgBox() {
  if (input.value == "") {
      msg.innerHTML = "Name Is Required!";
      return false;
   }
   if (input.value == "   ") {
      msg.innerHTML = "Name Is Required!";
      return false;
   }
   if (input.value == ",,,") {
      msg.innerHTML = "Invalid Name!";
      return false;
   }
   if (input.value == "...") {
      msg.innerHTML = "Invalid Name!";
      return false;
   }
   if (input.value == "<<<") {
      msg.innerHTML = "Invalid Name!";
      return false;
   }
   if (input.value.length < "3") {
      msg.innerHTML = "Name Must Be Greater Than 2!";
      return false;
   }
   if (input.value.length > "5") {
      msg.innerHTML = "Name Must Be Less Than 6!";
      return false;
   }
   localStorage.setItem("realname", (input).value);
}
