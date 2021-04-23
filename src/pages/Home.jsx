import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="dulux room starting at $299">
          <Link to="/book" className="btn btn-outline-primary">
            Book Now
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
