var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  autoplay:{
    delay:8000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
});


// time for navbar
const nav_slider=document.getElementById('nav-slider');
console.log(nav_slider)
const body_body=document.getElementById('body');
const close_btn=document.getElementById('toggle-two');
const menu_btn=document.getElementById('toggle-one');
const nav=document.getElementsByClassName("nav")[0];

menu_btn.addEventListener('click',(e)=>{
console.log(e.target);

nav_slider.classList.toggle('nav-slider');
nav.style.display = 'none'

})



// menu icon functionality

const nav_link=document.getElementsByClassName('navlink-slide');
console.log(nav_link)
Array.from(nav_link).forEach((nav_btn)=>{
  nav_btn.addEventListener('click',()=>{
    nav.style.display = 'flex';
    nav_slider.classList.toggle('nav-slider');
  })
})














