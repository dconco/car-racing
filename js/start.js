let cont = document.getElementById('continue');
let cover = document.getElementById("cover");
let cov = document.getElementById('cover');
let pro = document.getElementById("pro");
let progress = document.getElementById("progress");
let logo = document.getElementById("logo");
let racing = document.getElementById("racing");
let home = document.getElementById("home");
let audio = document.getElementById("audio");

function play() {
   audio.play();
}

window.onload = function() {
   alert("Tap The Screen To Activate Audio!");
   document.addEventListener('contextmenu',  event => event.preventDefault());
   progress.style.width = "100%";
   progress.style.transition = "20s";
   pro.style.transitionDuration = "20s";
   logo.style.transform = "rotate(-385deg)";
   logo.style.transitionDuration = "1s";
   logo.style.transitionDelay = "3s";
   logo.style.left = "-3pc";
   logo.style.visibility = "visible";
   if (progress.style.width === "100%") {
      cont.style.textAlign = "center";
      cont.style.visibility = "visible";
      cont.style.fontSize = "2pc";
      cont.style.transition = "2s ease 21s";
   }
   if (cont.style.transitionDelay === "21s") {
      progress.style.visibility = "hidden";
      pro.style.visibility = "hidden";
   }
};

function open() {
   if (progress.style.visibility === "hidden") {
      cover.style.visibility = "hidden";
   }
}