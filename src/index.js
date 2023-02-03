// swiper
import Swiper, { Navigation } from "swiper";
// styles
import "./fonts/fonts.scss";
import "./style.scss";
import "swiper/css";

function init() {
  const btn = document.querySelector(".menu__mobile-btn");
  const menuMobile = document.querySelector(".menu__mobile-bottom");

  btn.addEventListener("click", () => {
    menuMobile.classList.toggle("menu--open");
  });

  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", init);
