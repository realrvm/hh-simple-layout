// swiper
import Swiper, { Navigation } from "swiper";
// styles
import "./fonts/fonts.scss";
import "./style.scss";
import "swiper/css";

function init() {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left",
    },
  });
}

document.addEventListener("DOMContentLoaded", init);
