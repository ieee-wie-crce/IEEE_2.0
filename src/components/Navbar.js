import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import ieeeLogo from "../assets/logos/ieee-wie-logo.png";
import "../css/Navbar.css";
import LordIcon from "./LordIcon";
function Navbar() {
  // Memoized handleToggle function
  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      let toggler = document.querySelector(".navLinks").style;
      toggler.height = toggler.height === "auto" ? 0 : "auto";
      toggler.overflow = toggler.overflow === "hidden" ? "none" : "hidden";
      document.querySelector(".navLinks").classList.toggle("p-3");
    }
  };

  // Memoized NavLink component
  const MemoNavLink = React.memo(({ to, icon, text, onClick }) => {
    return (
      <NavLink
        className="navLink text-white d-flex justify-content-center align-content-center"
        to={to}
        onClick={onClick}
      >
        <div className="mx-2">
          <LordIcon icon={icon} />
        </div>
        {text}
      </NavLink>
    );
  });

  // Memoized navigation links
  const navLinks = useMemo(() => {
    return [
      {
        to: "/about",
        icon: "yxczfiyc",
        text: "About",
      },
      { to: "/events", icon: "abfverha", text: "Events" },
      { to: "/team", icon: "vyqvtrtg", text: "Team" },
      {
        to: "/contact",
        icon: "rsvfayfn",
        text: "Contact",
      },
    ];
  }, []);

  return (
    <>
      {/* Navigation bar */}
      <nav className={"navbar fixed-top"}>
        <div className="navbrand">
          {/* Logo */}
          <div>
            <Link className="navbar-brand" to="/">
              <img src={ieeeLogo} alt="IEEE" width="60" />
            </Link>
          </div>
          {/* Toggler for small screens */}
          <button
            className="navbar-toggler"
            onClick={handleToggle}
            type="button"
          >
            <span>
              <LordIcon
                icon={"xynjytfp"}
                colors={"primary:#ffffff,secondary:#ffffff"}
                state={"morph-code"}
              />
            </span>
          </button>
        </div>
        {/* Navigation links */}
        <div className="navLinks">
          {navLinks.map((link, index) => (
            <MemoNavLink
              key={index}
              to={link.to}
              icon={link.icon}
              text={link.text}
              onClick={handleToggle}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
