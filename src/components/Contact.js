import React, { useRef, useState, useCallback, memo } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import LordIcon from "./LordIcon";
const Contact = () => {
  const form = useRef();

  const [formValue, setFormValue] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const changeHandler = useCallback((e) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const emailJSKeys = {
    emailServiceId: process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
    emailTemplateId: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
    emailPublicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
  };

  const handleSubmit = useCallback((e) => {
    let sendBtn = e.target[3];
    e.preventDefault();
    sendBtn.innerText = "Sending..";
    emailjs
      .sendForm(
        emailJSKeys.emailServiceId,
        emailJSKeys.emailTemplateId,
        form.current,
        emailJSKeys.emailPublicKey
      )
      .then(
        (result) => {
          sendBtn.classList.add("btn-success");
          sendBtn.innerHTML = "Sent!";
          sendBtn.disabled = true;

          // Reset form values after successful submission
          setFormValue({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          sendBtn.classList.add("btn-danger");
          sendBtn.innerText = "ERROR!";
        }
      );
  }, []);

  return (
    <>
      <div className="contact-page">
        <div className="title">
          <header className="d-flex justify-content-center align-items-center">
            <LordIcon icon={"rsvfayfn"} w={50} h={50} />
            &nbsp;Contact
          </header>
          <hr className="text-white h-100" />
        </div>
        <div className="contentSection">
          {/* contact_form */}
          <div className="left_side d-flex justify-content-center flex-column align-items-center">
            <div className="contact_form p-4" style={{ width: "90%" }}>
              <Form
                form={form}
                handleSubmit={handleSubmit}
                changeHandler={changeHandler}
                formValue={formValue}
              />
            </div>
            <hr />
            {/* contact_details */}
            <ContactDetails />
          </div>
          <div className="location py-4 px-lg-4 makeitcenter flex-column">
            <h3 className="makeitcenter">
              <LordIcon
                icon={"surcxhka"}
                state={"hover-jump-roll"}
                colors={"primary:#000000,secondary:#000000"}
                w={30}
                h={30}
                stroke={"bold"}
              />
              &nbsp;Locate Us
            </h3>
            <hr />
            <div className="collegeLocation">
              <iframe
                title="College Location"
                src="https://shorturl.at/moGH4"
                allowFullScreen={true}
                height={450}
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="contact_footer">
          <p>Developed with ❤ by IEEE-WIE Team!</p>
          <p>
            Copyright <Icon icon="ic:twotone-copyright" />
            {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default memo(Contact);

function ContactDetails() {
  return (
    <div
      className="contact_details m-4 p-4"
      style={{
        width: "90%",
      }}
    >
      <h3 className="makeitcenter">
        <LordIcon icon={"fdxqrdfe"} colors={"#000000"} w={30} h={30} />
        &nbsp;Contact Details
      </h3>
      <hr />
      <p>
        <Icon icon="mdi:super-chat-for-good" /> Thanks a bunch for checking out
        IEEE-WIE-CRCE! Feel free to reach out to us via email, WhatsApp, or a
        call. Here are the awesome people you can connect with!
      </p>
      <p>
        <Icon icon="line-md:phone-call-twotone-loop" /> Aditya:{" "}
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
        <Icon icon="line-md:my-location-loop" /> Fr. Agnel Ashram, Bandstand,
        Bandra (W), Mumbai 400050. MH, IN
      </p>
    </div>
  );
}

function Form({ form, handleSubmit, changeHandler, formValue }) {
  return (
    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="from_name"
          name="from_name"
          placeholder="Name"
          autoComplete="off"
          value={formValue.from_name}
          onChange={changeHandler}
          required
        />
        <label htmlFor="from_name" className="makeitcenter">
          <LordIcon icon={"fdxqrdfe"} colors={"#000000"} />
          &nbsp;Name
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
          value={formValue.from_email}
          onChange={changeHandler}
          required
        />
        <label htmlFor="from_email" className="makeitcenter">
          <LordIcon icon={"nzixoeyk"} colors={"#000000"} />
          &nbsp;Email address
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
          value={formValue.message}
          onChange={changeHandler}
          required
        />
        <label htmlFor="message" className="makeitcenter">
          <LordIcon icon={"xtnsvhie"} colors={"#000000"} />
          &nbsp;Message
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-4 makeitcenter">
        Send&nbsp;
        <LordIcon icon={"aycieyht"} stroke={"bold"} w={30} h={30} />
      </button>
    </form>
  );
}
