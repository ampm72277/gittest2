// /* menu hidden */

// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /* menu show */

// if(navToggle){
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add('show-menu')
//   })
// }

// if(navClose){
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu')
//   })
// }

/* swiper slide */
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  // centeredSlides: true,
  // spaceBetween: 30,
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3000,   // 시간 설정
    disableOnInteraction : true,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  // loopFillGroupWithBlank : true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   // 반응형
   breakpoints: {
    1280: {
        slidesPerView: 1,
        slidesPerGroup: 1,
    },
    720: {
        slidesPerView: 1,
        slidesPerGroup: 1,
    },
}
 
});

// var appendNumber = 1;
// var prependNumber = 1;
// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//     ]);
//   });
// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   });
// document
//   .querySelector(".append-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide(
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//     );
//   });
// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//     ]);
//   });
  