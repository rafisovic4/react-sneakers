import { NavLink } from "react-router-dom";
import { CartIcon, HeartIcon, OrderIcon } from "../Icons/Icons";
import Logo from "./Logo/Logo";
import { useContext } from "react";
import { ModalContext } from "../../pages/Root";

const CartButton = () => {

  const {toggleModal} = useContext(ModalContext);

  return (
    <button onClick={toggleModal}>
      <CartIcon /> <span>1205 руб.</span>
    </button>
  );
};

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav>
        <CartButton />
        <NavLink to="/favorites">
          <HeartIcon />
        </NavLink>
        <NavLink to="/orders">
          <OrderIcon />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
