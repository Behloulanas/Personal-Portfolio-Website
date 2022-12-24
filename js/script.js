let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
};

window.onscroll = () => {
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');

   if (window.scrollY > 650) {
      document.querySelector('.header').classList.add('active');
   } else {
      document.querySelector('.header').classList.remove('active');
   };

   let value = window.scrollY / 10;
   document.querySelector('.home .mountain').style.bottom = `${-value}%`;
   document.querySelector('.home .content').style.bottom = `${value}%`;
   document.querySelector('.home .moon').style.marginTop = `${-value}%`;
   document.querySelector('.home .moon2').style.marginTop = `${-value}%`;
   document.querySelector('.home .moon3').style.marginTop = `${-value}%`;
   document.querySelector('.home .moon4').style.marginTop = `${-value}%`;
   document.querySelector('.home .moon5').style.marginTop = `${-value}%`;
   document.querySelector('.home .moon6').style.marginTop = `${-value}%`;
   document.querySelector('.home .cloud-1').style.right = `${-value}%`;
   document.querySelector('.home .cloud-2').style.left = `${-value}%`;
   document.querySelector('.home .cloud-3').style.left = `${-value}%`;
   document.querySelector('.home .cloud-4').style.right = `${-value}%`;
};


/*  Hover Card Start */
document.querySelector(".emsi2").addEventListener("mouseover", function () {
   document.querySelector(".FadeOUt").style.transition = "0.1s all";
   document.querySelector(".FadeOUt").style.opacity = "1";
   document.querySelector(".FadeOUt p").innerHTML = " c'est ma premier année en cycle ingénieur en génie informatique et réseau a EMSI ";
});
document.querySelector(".emsi2").addEventListener("mouseleave", function () {
   document.querySelector(".FadeOUt").style.opacity = "0";
});

document.querySelector(".emsi1").addEventListener("mouseover", function () {
   document.querySelector(".FadeOUt").style.transition = "0.1s all";
   document.querySelector(".FadeOUt").style.opacity = "1";
   document.querySelector(".FadeOUt p").innerHTML = "c'est ma deuxième année des classes préparatoires intégrées dans l'EMSI ";
});
document.querySelector(".emsi1").addEventListener("mouseleave", function () {
   document.querySelector(".FadeOUt").style.opacity = "0";
});

document.querySelector(".emsi").addEventListener("mouseover", function () {
   document.querySelector(".FadeOUt").style.transition = "0.5s all";
   document.querySelector(".FadeOUt").style.opacity = "1";
   document.querySelector(".FadeOUt p").innerHTML = "EMSI-ECOLE MAROCAINE DES SCIENCES DE L'INGENIEUR :c'est ma premier année des classes préparatoires intégrées dans l'EMSI";
})
document.querySelector(".emsi").addEventListener("mouseleave", function () {
   document.querySelector(".FadeOUt").style.opacity = "0";
})

document.querySelector(".exel").addEventListener("mouseover", function () {
   document.querySelector(".FadeOUt").style.transition = "0.5s all";
   document.querySelector(".FadeOUt").style.opacity = "1";
   document.querySelector(".FadeOUt p").innerHTML = "c'est ma troisième année du lycée, j'ai eu mon baccalauréat scientifique option international, Scientifique-mathématique A en 2019 avec une mention";
});
document.querySelector(".exel").addEventListener("mouseleave", function () {
   document.querySelector(".FadeOUt").style.opacity = "0";

});

document.querySelector(".NoStage").addEventListener("mouseover", function () {
   document.querySelector(".FadeOUt").style.transition = "0.1s all";
   document.querySelector(".FadeOUt").style.opacity = "1";
   document.querySelector(".FadeOUt p").innerHTML = " c'est ma deuxième année du lycee, 1er année BAC international, Scientifique-mathématique ";
});
document.querySelector(".NoStage").addEventListener("mouseleave", function () {
   document.querySelector(".FadeOUt").style.opacity = "0";
});
/*

*/

function validate(e){
   var name = document.getElementById("name").value;
   var phone =document.getElementById("phone").value;
   var email =document.getElementById("email").value;
   var error_message = document.getElementById("error_message");
   
   error_message.style.padding = "10px";
   error_message.style.color = "white";
   error_message.style.background = "red";
   error_message.style.fontSize = "15px";
   
   var text;
   if(name.length < 5){
     text = "Please Enter valid Name";
     error_message.innerHTML = text;
     e.preventDefault();
     return false;
   }
   
   
  if(isNaN(phone) || phone.length != 10){
     text = "Please Enter valid Phone Number";
     error_message.innerHTML = text;
     e.preventDefault();
     return false;
   }

 }
 
 document.querySelector(".btn").addEventListener("click", validate);


