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
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="contact">
        <Title title="Contact us" />
        <div className="address">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
