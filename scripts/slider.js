import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

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
					dragSize: 120,
				},

				watchSlidesProgress: true,
				keyboard: true,
			});
		}
	});
}
