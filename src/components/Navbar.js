import React, { useMemo, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ieeeLogo from "../assets/logos/ieee-wie-logo.png";
import emailjs from "@emailjs/browser";
import "./Navbar.css";
const Modal = React.lazy(() => import("./Modal"));
function Navbar() {
  const form = useRef();
  // Memoized handleToggle function
  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      let toggler = document.querySelector(".navLinks").style;
      toggler.height = toggler.height === "auto" ? 0 : "auto";
      toggler.overflow = toggler.overflow === "hidden" ? "none" : "hidden";
      document.querySelector(".navLinks").classList.toggle("p-3")
    }
  };

  // Memoized NavLink component
  const MemoNavLink = React.memo(({ to, icon, text, onClick }) => {
    return (
      <NavLink className="navLink text-white" to={to} onClick={onClick}>
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
    ];
  }, []);
  const handleSubmit = (e) => {
    let sendBtn = e.target[4];
    e.preventDefault();
    sendBtn.innerText = "Sending..";
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          sendBtn.classList.add("btn-success");
          sendBtn.innerHTML = "Sent!";
          sendBtn.disabled = true;
        },
        (error) => {
          console.log(error);
          sendBtn.classList.add("btn-danger");
          sendBtn.innerText = "ERROR!";
        }
      );
  };
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
            <span className="navbar-toggler-icon" />
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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <Icon icon="tabler:mail-code" /> Contact
          </button>
        </div>
      </nav>
      {/* Contact Modal */}
      <Modal form={form} handleSubmit={handleSubmit} />
    </>
  );
}

export default Navbar;
