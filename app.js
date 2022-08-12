
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

// COLOR BUTTON

var black_button = document.querySelector(".black");
var blue_button = document.querySelector(".blue");
var pink_button = document.querySelector(".pink");
black_button.addEventListener("click", ()=>{
  document.querySelector(".mobile-img").src = "img/n_b.png";
});
pink_button.addEventListener("click", ()=>{
  document.querySelector(".mobile-img").src = "img/n_p.png";
});
blue_button.addEventListener("click", ()=>{
  document.querySelector(".mobile-img").src = "img/n_s.png";
});

// FEATURE ICON

var fe_ic = document.querySelectorAll(".feat-col");
window.addEventListener('scroll', fe_reveal);
function fe_reveal(){
  var windowheight = window.innerHeight;

  for(var i=0; i<fe_ic.length; i++){

    var revealtop = fe_ic[i].getBoundingClientRect().top;

    if(revealtop < windowheight-300){
      fe_ic[i].classList.add("feat-fa-active");
    }
  }
}

// link

function go_to_feat(){
  window.open("feature.html", "_self");
}

// TWO MOBILE

var m_j = document.querySelector(".j");
var m_k = document.querySelector(".k");
m_j.addEventListener("mouseover", function(){
  m_j.style.transform = "translateX(-40%)";
})
m_k.addEventListener("mouseover", function(){
  m_k.style.transform = "translateX(40%)";
})
m_j.addEventListener("mouseleave", function(){
  m_j.style.transform = "translateX(-90%)";
})
m_k.addEventListener("mouseleave", function(){
  m_k.style.transform = "translateX(90%)";
})

// IMGS AT SCROLL

window.addEventListener('scroll', reveal1);

function reveal1(){
  var reveals = document.querySelector(".img_n_1");
  var windowheight = window.innerHeight;
  var revealtop = reveals.getBoundingClientRect().top;
  if(revealtop < windowheight-300){
    reveals.classList.add('active1');
  }
}

window.addEventListener('scroll', reveal2);

function reveal2(){
  var reveals = document.querySelector(".img_n_2");
  var windowheight = window.innerHeight;
  var revealtop = reveals.getBoundingClientRect().top;
  if(revealtop < windowheight-300){
    reveals.classList.add('active2');
  }
}

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

// USERNAME

function sayhi(){

  var input_text = document.querySelector("#type-email").value;
  var username = "";
  if(input_text !== ""){

    for(var i=0; i<input_text.length; i++){
      if(input_text[i] !== "@"){
        username += input_text[i];
      }else{
        break;
      }
    }

    document.querySelector(".user-name").innerHTML = "<b>hi! " + username + "</b>";
    document.querySelector(".email-in").remove();
    document.querySelector(".email-info").remove();
    document.querySelector(".gladding-user").innerHTML = "<b>" + username.toUpperCase() + "</b>" + "  <i class='fas fa-heart'></i>";
    document.querySelector(".after-sign-up").style.display = "inline-block";

  }
}
