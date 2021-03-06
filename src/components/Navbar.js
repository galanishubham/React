import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ basket, whislist }] = useStateValue();

  const [clickMenu, setClickMenu] = useState(false);

  const handleClick = () => setClickMenu(!clickMenu);
  const closeMobileMenu = () => setClickMenu(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand__logo" onClick={closeMobileMenu}>
            Urban Vogue <i className="fas fa-bags-shopping"></i>
          </Link>
          <div
            className={`navbar-brand__category ${clickMenu ? "active" : ""} `}
          >
            <Link
              className="navbar-brand__items"
              to="/products"
              onClick={closeMobileMenu}
            >
              Men
            </Link>
            <Link
              className="navbar-brand__items"
              to="/products"
              onClick={closeMobileMenu}
            >
              Women
            </Link>
            <Link
              className="navbar-brand__items"
              to="/products"
              onClick={closeMobileMenu}
            >
              Electronics
            </Link>
          </div>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          <i className={clickMenu ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="navbar-actions">
          <Link
            className="navbar-actions__items"
            to="/products"
            onClick={closeMobileMenu}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </span>
            <span className="navbar-actions__title">Profile</span>
          </Link>
          <Link
            className="navbar-actions__items"
            to="/products"
            onClick={closeMobileMenu}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </span>
            {whislist?.length > 0 && (
              <span className="navbar-actions__badge navbar-actions__badge--whislist">
                {whislist?.length}
              </span>
            )}
            <span className="navbar-actions__title">Whislist</span>
          </Link>
          <Link
            className="navbar-actions__items"
            to="/products"
            onClick={closeMobileMenu}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </span>
            {basket?.length > 0 && (
              <span className="navbar-actions__badge navbar-actions__badge--bag">
                {basket?.length}
              </span>
            )}

            <span className="navbar-actions__title">Bag</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
