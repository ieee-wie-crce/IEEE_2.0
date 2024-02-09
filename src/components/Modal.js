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
      <div className="modal-dialog ">
        <div className="modal-content">
          <form ref={form} onSubmit={handleSubmit}>
            {/* modal heading */}
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-5" id="contactModalLabel">
                <Icon icon="academicons:ieee" /> Get in Touch
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            {/* modal content */}
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="from_name"
                  name="from_name"
                  placeholder="Name"
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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

            <div className="contactDetails m-3 ">
              <hr />
              <h3>
                <Icon icon="tabler:message-bolt" /> Contact Details
              </h3>
              <br />
              <p>
                <Icon icon="mdi:super-chat-for-good" /> Thanks a bunch for
                checking out IEEE-WIE-CRCE! Feel free to reach out to us via
                email, WhatsApp, or a call. Here are the awesome people you can
                connect with!
              </p>
              <p>
                <Icon icon="line-md:phone-call-twotone-loop" /> Aditya Dhikale:{" "}
                <a
                  href="tel:7620335644"
                  className="text-decoration-underline text-dark"
                >
                  +917620335644
                </a>
              </p>
              <p>
                <Icon icon="line-md:phone-call-twotone-loop" /> Shivaprasad:{" "}
                <a
                  href="tel:7558220919"
                  className="text-decoration-underline text-dark"
                >
                  +917558220919
                </a>
              </p>
              <p>
                <Icon icon="line-md:email-twotone" /> Email:
                <a
                  href="mailto:ieeecrce.24@gmail.com"
                  className="text-decoration-underline text-dark"
                >
                  ieeecrce.24@gmail.com
                </a>
              </p>
              <p>
                <Icon icon="line-md:my-location-loop" /> Fr. Agnel Ashram,
                Bandstand, Bandra (W), Mumbai 400050. MH, IN
              </p>
              <div className="collegeLocation d-flex justify-content-center">
                <iframe
                  title="College Location"
                  src="https://shorturl.at/moGH4"
                  allowFullScreen=""
                  width={600}
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3"
                ></iframe>
              </div>
              <hr />
              <p>Developed with ❤ by IEEE-WIE Team!</p>
              <p>
                Copyright <Icon icon="ic:twotone-copyright" />{new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
