import { HeaderNav } from "./HeaderNav";

export const HeaderTop = () => {
  return `      
      <div class="header__top">
        <div class="container header__container">
          <button class="header__location-btn btn-reset" type="button">
            Фрязино
          </button>
          
          ${HeaderNav()}
        </div>
      </div>`;
};
