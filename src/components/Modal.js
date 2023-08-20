import React from "react";
import { Icon } from "@iconify/react";
export default function Modal({ form, handleSubmit }) {
  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
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
                  id="from_name"
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
                  id="from_email"
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
                <label htmlFor="message">
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
  );
}
