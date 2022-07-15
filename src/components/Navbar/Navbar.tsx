import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./style.scss";

export const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="!#" className="navbar__link">
            Features
          </a>
        </li>
        <li className="navbar__item">
          <a href="!#" className="navbar__link">
            Partners
          </a>
        </li>
        <li className="navbar__item">
          <a href="!#" className="navbar__link">
            Stories
          </a>
        </li>
      </ul>
      <button type="button" className="navbar__btn--download">
        Download for free
      </button>
    </header>
  );
};
