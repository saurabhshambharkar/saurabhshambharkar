import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

emailjs.init("45v_zPrMLqqJb_s02");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "sshambharkar091@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_d5rhgxm",
        "template_xtk2qlq",
        templateParams,
        "MxpPdyoJE276xobL9"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div>
          <h1 className="text-3xl font-semibold text-center mb-8">
            Chat With Me
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
             bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
             bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
             bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
             h-32 resize-none bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-center mb-8">
            Contact Me
          </h1>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                <MapPin />
              </span>
              <span>Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                <Phone />{" "}
              </span>
              <span>+919096887183</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                <Mail />
              </span>
              <a
                href="mailto:sshambharkar091@gmail.com"
                className="text-blue-600 hover:underline"
              >
                sshambharkar091@gmail.com
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/saurabh-shambharkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/saurabhshambharkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-red-700 transition duration-300"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>

      <marquee>
        <footer className="mt-16 text-center text-gray-600  dark:text-white text-x">
          © 2025 All rights reserved | This template is made by Saurabh Shambharkar.
        </footer>
      </marquee>
    </div>
  );
};

export default Contact;
