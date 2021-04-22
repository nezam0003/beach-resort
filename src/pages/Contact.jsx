import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Title from "../components/Title";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="get in touch">
          <Link to="/" className="custom-btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="contact">
        <Title title="Contact us" />
        <div className="container">
          <div className="row">
            <div className=" col-11 mx-auto mx-lg-0 col-md-10 col-lg-6">
              <ContactInfo />
            </div>
            <div className=" col-11 mx-auto mx-lg-0 col-md-10 col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
