import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";

export function initSlider() {
	document.addEventListener("DOMContentLoaded", () => {
		if (document.querySelector(".popular-brands__slider")) {
			new Swiper(".popular-brands__slider", {
				slidesPerView: "auto",
				slidesPerGroup: 6,
				spaceBetween: 8,

				slidesOffsetAfter: 16,

				breakpoints: {
					769: {
						slidesOffsetAfter: 32,
					},

					1025: {
						slidesOffsetAfter: 0,
					},
				},

				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},

				watchSlidesProgress: true,
				keyboard: true,
			});
		}
	});
}
