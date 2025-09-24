import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiBars3, HiMiniShoppingCart } from "react-icons/hi2";
import { BiSolidLogIn, BiLogOut } from "react-icons/bi";
import { NavWrap } from "./HeaderStyle";

const NavBar = () => {
  const { carts } = useSelector((state) => state.cart);
  const { authed, user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const navItems = [
    { to: "/about", label: "About" },
    { to: "/product", label: "Product" },
    { to: "/notice", label: "Notice" },
    { to: "/customer", label: "Customer" },
  ];

  return (
    <NavWrap className={`nav ${open ? "open" : ""}`}>
      <button
        type="button"
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="메뉴 토글"
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        <HiBars3 />
      </button>
      <ul id="primary-navigation">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} onClick={closeMenu}>
              {label}
            </NavLink>
          </li>
        ))}
        {authed && (
          <li className="welcome">
            <span>{user?.username ?? ""} 님</span>
          </li>
        )}
        <li className="login">
          <Link to={authed ? "/logout" : "/loginMain"} onClick={closeMenu}>
            {authed ? <BiLogOut /> : <BiSolidLogIn />}
            {authed ? "Logout" : "Login"}
          </Link>
        </li>
        <li className="cart">
          <Link to="/cart" onClick={closeMenu}>
            <span className="sr-only">Cart</span>
            <HiMiniShoppingCart />
            <span className="count" aria-live="polite">
              {carts.length}
            </span>
          </Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default NavBar;

