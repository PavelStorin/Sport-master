import { HeaderNavButtonDropdown } from "./HeaderNavButtonDropdown";
import { HeaderNavItem } from "./HeaderNavItem";

const headerNavListLinks = [
  {
    href: "tel:+74957777771",
    value: "8 495 777-777-1",
  },
  {
    href: "/stores",
    value: "Магазины",
  },
  {
    href: "/delivery",
    value: "Доставка и оплата",
  },
  {
    href: "/marketplace",
    value: "Продавай на Спортмастере",
  },
  {
    href: "tel:+74957777771",
    value: "8 495 777-777-1",
  },
  {
    href: "/stores",
    value: "Магазины",
  },
  {
    href: "/delivery",
    value: "Доставка и оплата",
  },
  {
    href: "tel:+74957777771",
    value: "8 495 777-777-1",
  },
];

export const HeaderNav = () => {
  return `
      <nav class="header__nav top-nav">
            <ul class="top-nav__list">
            ${headerNavListLinks.map((link) => HeaderNavItem(link.href, link.value)).join("")}

              <li class="top-nav__item">
                ${HeaderNavButtonDropdown()}
              </li>
            </ul>
      </nav>
  `;
};
