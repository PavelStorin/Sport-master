import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function initSlider() {
	document.addEventListener("DOMContentLoaded", () => {
		if (document.querySelector(".sports-promo__slider")) {
			new Swiper(".sports-promo__slider", {
				slidesPerView: "auto",
				slidesPerGroup: 8,
				spaceBetween: 12,

				breakpoints: {
					1025: {
						scrollbar: {
							dragSize: 80,
						},
					},

					1280: {
						scrollbar: {
							dragSize: 100,
						},
					},

					1440: {
						scrollbar: {
							dragSize: 120,
						},
					},
				},

				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},

				scrollbar: {
					el: ".swiper-scrollbar",
					draggable: false,
				},
			});
		}
	});
}
