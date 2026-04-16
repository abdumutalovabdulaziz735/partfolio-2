import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useState } from "react";
const Nav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === "/";

  const links = [
    { url: "/", name: "Home" },
    { url: "/project", name: "Projects" },
    { url: "/history", name: "skills" },
  ];

  return (
    <div className={`nav ${isHome ? "nav--home" : "nav--other"}`}>
      {isHome && <div className="nav_list_background"></div>}

      <div className="container">
        <div className="nav_box">
          <Link to="/" className="nav_logo">
            <img className="nav_img" src={logo} alt="" />
          </Link>

          <ul className="nav_list">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink className="nav_list_link" to={link.url}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="nav_toggle" onClick={() => setOpen(!open)}>
            ☰
          </button>
          {open && (
            <div className="nav_dropdown">
              {links.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.url}
                  className="nav_dropdown_link"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
