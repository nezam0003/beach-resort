import React, { useState } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../AppProvider";
import StyledHero from "../components/StyledHero";

const SingleRoom = (props) => {
  const [state, setState] = useState({
    slug: props.match.params.slug,
    defaultBcg,
  });

  const { getRoom } = useGlobalContext();
  const room = getRoom(state.slug);
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="custom-btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room `}>
          <Link to="/rooms" className="btn btn-outline-warning mx-2">
            Back to rooms
          </Link>
          <Link to="/book" className="btn btn-outline-primary">
            Book now
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p> {description} </p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6> price : ${price} </h6>
            <h6> size : {size} SQFT </h6>
            <h6>
              max capacity :
              {capacity > 1 ? ` ${capacity} people ` : ` ${capacity} person `}
            </h6>
            <h6> {pets ? "pets allowed" : "no pets allowed"} </h6>
            <h6> {breakfast && " free breakfast included "} </h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
