// import React, { useRef, useEffect } from "react";
import { useEffect } from "react";
import applyIPhoneBackgroundStyles from "../assets/js/IphoneBackgroundStyles";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import "../assets/css/partnerwithus.css";

function PartnerWithUs(): JSX.Element {
  useEffect(() => {
    applyIPhoneBackgroundStyles();
  }, []);

//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm("service_pww8qck", "template_05jlvow", form.current, {
//           publicKey: "pmpQZBGyNGzNoeNFF",
//         })
//         .then(
//           () => {
//             toast.success(
//               "Thank you for your response. Our team will reach out to you soon."
//             );
//             console.log("SUCCESS!");
//           },
//           (error) => {
//             toast.error("Failed to send email. Please try again.");
//             console.log("FAILED...", error.text);
//           }
//         );
//     }
//   };

  return (
    <>
      <section className="main-section first-section partner-hero-section page-hero-section">
        <div className="overlay"></div>
        <div className="section-container">
          <h3 className="partner-hero-section-heading page-hero-section-heading">
            Our mission is simple
          </h3>

          <p className="partner-hero-section-subHeading">
            To provide customers with a seamless and convenient laundry
            experience while empowering laundry stores to reach new heights of
            success
          </p>
        </div>
      </section>

      <section className="main-section second-section partner-section">
        <div className="section-container">
          <h1 className="partner-section-heading section-heading">
            Why Partner with Us?
          </h1>

          <div className="partner-content">
            <div className="partner-content-card partner-content-1">
              <div className="partner-content-icon partner-content-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              </div>
              <div className="partner-content-text">
                <h3>Expand your reach</h3>
                <p>
                  Access a broader customer base through the Suff.ai platform.
                  Increase your store’s visibility and attract more clients.
                </p>
              </div>
            </div>

            <div className="partner-content-card partner-content-2">
              <div className="partner-content-icon partner-content-icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z" />
                </svg>
              </div>
              <div className="partner-content-text">
                <h3>Streamlined Operations</h3>
                <p>
                  Seamlessly manage laundry orders and deliveries with our
                  weekly and monthly business reports. Reduce administrative
                  tasks and focus on delivering quality service.
                </p>
              </div>
            </div>

            <div className="partner-content-card partner-content-3">
              <div className="partner-content-icon partner-content-icon-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                </svg>
              </div>
              <div className="partner-content-text">
                <h3>Cutting Edge Technology</h3>
                <p>
                  Leverage our technology to optimize your experience with
                  customers.
                </p>
              </div>
            </div>

            <div className="partner-content-card partner-content-4">
              <div className="partner-content-icon partner-content-icon-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" />
                </svg>
              </div>
              <div className="partner-content-text">
                <h3>Quality Assurance</h3>
                <p>
                  Join a network of top-rated laundry stores committed to
                  delivering the best quality service.
                </p>
              </div>
            </div>

            <div className="partner-content-card partner-content-5">
              <div className="partner-content-icon partner-content-icon-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
              </div>
              <div className="partner-content-text">
                <h3>Marketing Support</h3>
                <p>
                  Benefit from Suff.ai’s marketing efforts to drive more
                  business to your store. Explore co-marketing opportunities to
                  boost your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section third-section contact-section">
        <div className="section-container">
          <div className="contact-main-content">
            {/* <form ref={form} onSubmit={sendEmail} className="contact-form"> */}
            <form className="contact-form">
              <h1 className="contact-section-heading section-heading">
                Join Forces!
              </h1>
              <div className="contact-form-group">
                <label htmlFor="nameForm">Name / ಹೆಸರು *</label>
                <input
                  type="text"
                  id="nameForm"
                  name="nameForm"
                  placeholder="Shubham Kumar"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phoneForm">
                  Phone Number / ದೂರವಾಣಿ ಸಂಖ್ಯೆ *
                </label>
                <input
                  type="text"
                  id="phoneForm"
                  name="phoneForm"
                  placeholder="+91 22 1234 5678"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="nameForm">Email / ಇಮೇಲ್</label>
                <input
                  type="email"
                  id="emailForm"
                  name="emailForm"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="messageForm">Message / ಸಂದೇಶ</label>
                <textarea
                  cols={30}
                  rows={10}
                  id="messageForm"
                  name="messageForm"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="contact-form-group">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* <ToastContainer /> */}
    </>
  );
}

export default PartnerWithUs;
