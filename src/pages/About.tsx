// import React, { useEffect } from "react";
import { useEffect } from "react";
import applyIPhoneBackgroundStyles from "../assets/js/IphoneBackgroundStyles";
// import { Link } from "react-router-dom";
import "../assets/css/about.css";
import aboutFeatureImg from "../assets/images/about-us-feature-image.png";
import jayeshImg from "../assets/images/Jayesh-edited.webp";
import riteshImg from "../assets/images/Ritesh-edited.webp";
import rahulImg from "../assets/images/rahul-photo.webp";
import harshaImg from "../assets/images/Harsha-photo.png";
import personImg from "../assets/images/person-gray-photo-placeholder-woman.jpg";

function About(): JSX.Element {
    useEffect(() => {
      applyIPhoneBackgroundStyles();
    }, []);

  return (
    <>
      <section className="main-section first-section about-hero-section page-hero-section">
        <div className="overlay"></div>
        <div className="section-container">
          <h3 className="about-hero-section-heading page-hero-section-heading">
            About us
          </h3>
        </div>
      </section>

      <section className="main-section second-section about-feature-section">
        <div className="section-container">
          <div className="about-feature-content">
            <div className="about-feature-left">
              <p>
                We could go on and on about how we are the next big thing that
                will disrupt the industry, revolutionize it forever, etc. Now
                however true that is, we want to get straight to the point. We
                are brilliant at doing what anyone would want from an ideal
                laundry business- that their dear clothes get washed
                immaculately, and the customer support are unparalleled. <br />
                <br />
                We have a plethora of laundry service providers onboarded on our
                platform with their ratings and reviews, which not only give you
                a fair idea of whom you’re giving your clothes to but also
                ensure competitive pricing, enabling you to work according to
                your budget. We are dedicated to maintaining the highest
                standards of excellence in our services, from the selection of
                partner stores to the quality of the laundry process in said
                stores.
                <br />
                <br />
                Suff.ai strives to be the preferred choice for individuals
                seeking reliable, high-quality laundry services. By connecting
                customers with trusted local laundry partners, we aim to build a
                community with long lasting relationships built on trust,
                efficiency, and a shared commitment to changing India’s outlook
                on laundry.
                <br />
                <br />
                Suff.ai is not just a laundry service, it’s a platform that
                empowers you to reclaim your time, reduce stress, and focus on
                what truly matters in your lives.
              </p>
            </div>

            <div className="about-feature-right">
              <img src={aboutFeatureImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="main-section third-section about-owner-section">
        <div className="section-container">
          <div className="about-owner-content-top">
            <div className="about-owner-left">
              <img src={jayeshImg} alt="" />
              <div className="about-owner-details">
                <p>
                  <strong>Jayesh Arya</strong>
                  <br />
                  <strong>Co-founder</strong>
                </p>
                <p>
                  <span>IIT Kharagpur graduate</span>
                </p>
              </div>
            </div>

            <div className="about-owner-right">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
                Doing laundry translates to misery and well laundered clothes to
                bliss. We are just trying to find the perfect intersection of
                the two.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </p>
            </div>
          </div>

          <div className="about-owner-content-bottom">
            <div className="about-owner-left">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
                The aim is to become synonymous with the word laundry in the
                country
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </p>
            </div>

            <div className="about-owner-right">
              <img src={riteshImg} alt="" />
              <div className="about-owner-details">
                <p>
                  <strong>Ritesh Kumar</strong>
                  <br />
                  <strong>Co-founder</strong>
                </p>
                <p>
                  <span>IIT Kharagpur graduate</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section fourth-section about-team-section">
        <div className="section-container">
          <h1 className="about-team-heading section-heading">Our allies</h1>

          <div className="about-team-content">
            <div className="about-team-card">
              <div className="about-team-card-img">
                <img src={harshaImg} alt="" />
              </div>
              <div className="about-team-card-text">
                <p>Harshavardhan Malla</p>
                <p>Design and Marketing Head</p>
              </div>
            </div>

            <div className="about-team-card">
              <div className="about-team-card-img">
                <img src={rahulImg} alt="" />
              </div>
              <div className="about-team-card-text">
                <p>Rahul Kumar</p>
                <p>Tech Head</p>
              </div>
            </div>

            <div className="about-team-card">
              <div className="about-team-card-img">
                <img src={personImg} alt="" />
              </div>
              <div className="about-team-card-text">
                <p>Karishma Kumari</p>
                <p>Tech Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
