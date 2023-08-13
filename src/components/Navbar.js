import React, { useCallback, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../components/Navbar.css";
import ieeeLogo from "../assets/logos/ieee-wie-logo.png";
function Navbar() {
  // Memoized handleToggle function
  const handleToggle = useCallback(() => {
    if (window.innerWidth <= 1024) {
      let toggle = document.querySelector(".navLinks").style;
      toggle.display = toggle.display === "flex" ? "none" : "flex";
    }
  }, []);

  // Memoized NavLink component
  const MemoNavLink = React.memo(({ to, icon, text, onClick }) => {
    return (
      <NavLink className="navLink" to={to} onClick={onClick}>
        <Icon icon={icon} /> {text}
      </NavLink>
    );
  });

  // Memoized navigation links
  const navLinks = useMemo(() => {
    return [
      { to: "/about", icon: "mdi:about-circle-outline", text: "About" },
      { to: "/events", icon: "carbon:event", text: "Events" },
      { to: "/team", icon: "fluent:people-team-16-regular", text: "Team" },
      { to: "/contact", icon: "tabler:mail-bolt", text: "Contact" },
    ];
  }, []);
  return (
    <>
      {/* Navigation bar */}
      <nav className={"navbar fixed-top"}>
        {/* Logo */}
        <div>
          <Link className="navbar-brand" to="/">
            <img src={ieeeLogo} alt="IEEE" width="60" />
          </Link>
        </div>
        {/* Toggler for small screens */}
        <button className="navbar-toggler" onClick={handleToggle} type="button">
          <span className="navbar-toggler-icon" />
        </button>
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
