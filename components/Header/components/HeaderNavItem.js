export const HeaderNavItem = (href, value) => {
  return `
    <li class="top-nav__item">
      <a href="${href}" class="top-nav__link">
        ${value}
      </a>
    </li>
  `;
};
