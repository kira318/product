
// NIGHT

function nightMode(){
  if(document.querySelector("body").style.backgroundColor === "black"){
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector(".navbar").style.backgroundColor = "white";
      document.documentElement.style.setProperty("--font-color", "black");
      document.documentElement.style.setProperty("--hover-spec-btn", "white");
      document.querySelector("i").classList.remove("far");
      document.querySelector("i").classList.add("fas");
  }else{
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector(".navbar").style.backgroundColor = "black";
      document.documentElement.style.setProperty("--font-color", "white");
      document.documentElement.style.setProperty("--hover-spec-btn", "black");
      document.querySelector("i").classList.remove("fas");
      document.querySelector("i").classList.add("far");
  }
}

// CANVAS

var canHeight = document.querySelector("#h");
var ctx = canHeight.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(10,0);
ctx.lineTo(0,0);
ctx.lineTo(0,379);
ctx.lineTo(10,379);
ctx.lineTo(0,379);
ctx.strokeStyle = "#E93B81";
ctx.lineWidth = 3;
ctx.stroke();

var canWidth = document.querySelector("#w");
var ctx = canWidth.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(0,5);
ctx.lineTo(158,5);
ctx.lineTo(158,0);
ctx.strokeStyle = "#E93B81";
ctx.lineWidth = 3;
ctx.stroke();

var canDepth = document.querySelector("#d");
var ctx = canDepth.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(0,5);
ctx.lineTo(51,5);
ctx.lineTo(51,0);
ctx.strokeStyle = "#E93B81";
ctx.lineWidth = 3;
ctx.stroke();

// CONTACT

window.addEventListener('scroll', tag_reveal);
var tags = document.querySelectorAll(".fa-con");
function tag_reveal(){
  var windowheight = window.innerHeight;
  var revealtop = tags[0].getBoundingClientRect().top;
  if(revealtop < 670){
    tags[0].classList.add('fa-con-active0');
    tags[1].classList.add('fa-con-active1');
    tags[2].classList.add('fa-con-active2');
    tags[3].classList.add('fa-con-active3');
    document.querySelector(".hr-two").classList.add("hr-two-active");
    document.querySelector(".cop").classList.add("cop-active");
    document.querySelector(".cop .fas").classList.add("cop-fas-active");
  }
}
