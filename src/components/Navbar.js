import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Button } from "./Button";
import { useStateValue } from "./StateProvider";

function Navbar() {
  // Global State
  const [{ basket }] = useStateValue();
  console.log("basket", basket);

  // * define useState hook [variable, functionToUpdateVariable] = useState(initial Value)
  const [clickMenu, setClickMenu] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClickMenu(!clickMenu);
  const closeMobileMenu = () => setClickMenu(false);

  // * hide button on small screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    //  * <> is a react fragments which will removed extra div wrapper in DOM
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Link replace <a> tag in router */}

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Urban Vogue <i className="fas fa-bags-shopping"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clickMenu ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={clickMenu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/checkout"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="docked-container">
                  <i className="fas fa-shopping-cart"></i>
                  <div className="docked-container__docker">
                    {basket?.length}
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
