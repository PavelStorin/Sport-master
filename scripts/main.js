import { Header } from "../components/Header/Header";
import { initSlider } from "./slider";

import { initSlider as initSportsSlider } from "./slider-sports-promo";

initSlider();
initSportsSlider();

document.querySelector("#app").innerHTML = `
  ${Header()}
`;
