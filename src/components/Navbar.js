import React, { useCallback, useMemo, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import "../components/Navbar.css";
import ieeeLogo from "../assets/logos/ieee-wie-logo.png";
function Navbar() {
  const form = useRef();
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
    ];
  }, []);
  console.log(process.env);
  const handleSubmit = (e) => {
    let sendBtn = e.target[4];
    e.preventDefault();
    console.log(e.target);
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
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form ref={form} onSubmit={handleSubmit}>
              {/* modal heading */}
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="contactModalLabel">
                  <Icon icon="ion:link" /> Get in Touch
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* modal content */}
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                  <label htmlFor="from_name">
                    <Icon icon="gg:rename" /> Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="from_email"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="from_email">
                    <Icon icon="line-md:email-twotone" /> Email address
                  </label>
                </div>
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Your Message Here..."
                    minLength={10}
                    required
                  />
                  <label htmlFor="email">
                    <Icon icon="tabler:message-bolt" /> Message
                  </label>
                </div>
              </div>
              {/* modal footer */}
              <div className="modal-footer border-top-0">
                <button type="submit" className="btn btn-primary w-100">
                  Send <Icon icon="cil:send" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
