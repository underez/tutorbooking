import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const naviget = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_ns6jxe8",
        "template_oxnjbzr",
        templateParams,
        "VrrYupDuebtgZisdc"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setName("");
          setMessage("");
          naviget("/react-templates/edumim/thanks");
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 "
    >
      <div>
        <input
          type="text"
          className=" from-control"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          className=" from-control"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
   
      <div className="md:col-span-2 col-span-1">
        <textarea
          className=" from-control"
          placeholder="Your Message*"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button class="btn btn-primary mt-[10px]" type="submit" name="submit">
        {loading ? 'sending..' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
