import React, { useState } from "react";
import Title from "./Title";
import car1 from "../images/cars/car-1.jpg";
import car2 from "../images/cars/car-2.jpg";
import car3 from "../images/cars/car-3.jpg";
import car4 from "../images/cars/car-4.jpg";
import car5 from "../images/cars/car-5.jpg";
import car6 from "../images/cars/car-6.jpeg";
import car7 from "../images/cars/car-7.jpg";
import car8 from "../images/cars/car-8.jpg";

const cars = [
  {
    id: 1,
    img: car1,
    title: "Corolla",
    passengers: "Max - 4",
    BDT: "2500/day",
  },
  {
    id: 2,
    img: car2,
    title: "Hiace",
    passengers: "Max - 14",
    BDT: "5000/day",
  },
  {
    id: 3,
    img: car3,
    title: "Civilian Bus",
    passengers: "Max - 20",
    BDT: "8000/day",
  },
  {
    id: 4,
    img: car4,
    title: "Noah",
    passengers: "Max - 9",
    BDT: "3000/day",
  },
  {
    id: 5,
    img: car5,
    title: "Hiace",
    passengers: "Max - 14",
    BDT: "4500/day",
  },
  {
    id: 6,
    img: car6,
    title: "Premio",
    passengers: "Max - 4",
    BDT: "3500/day",
  },
  {
    id: 7,
    img: car7,
    title: "Allion",
    passengers: "Max - 4",
    BDT: "3000/day",
  },
  {
    id: 8,
    img: car8,
    title: "Premio",
    passengers: "Max - 4",
    BDT: "3000/day",
  },
];

const allCatagories = ["All", ...new Set(cars.map((car) => car.title))];

const CarRentals = () => {
  const [allCars, setAllCars] = useState(cars);
  const [catagories, setCatagories] = useState(allCatagories);

  const filterCars = (title) => {
    if (title === "All") {
      setAllCars(cars);
      return;
    }
    const newCars = cars.filter((car) => car.title === title);
    setAllCars(newCars);
  };

  return (
    <>
      <div className="car pt-5">
        <Title title="our available cars" />
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-10 mx-auto text-center">
              {catagories.map((catagory, index) => {
                return (
                  <button
                    key={index}
                    className="btn btn-outline-success m-1"
                    onClick={() => filterCars(catagory)}
                  >
                    {catagory}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="row pb-3 g-3">
            {allCars.map((car) => {
              return (
                <>
                  <div
                    key={car.id}
                    className="col-11 mx-auto mx-md-0 col-sm-6 col-md-4 col-lg-3"
                  >
                    <div className="card shadow h-100">
                      <img src={car.img} alt={car.title} />
                      <div className="card-body">
                        <h4 className="card-title">{car.title}</h4>
                        <p className="card-text">
                          passengers: {car.passengers}
                        </p>
                        <small className="text-muted">Amount: {car.BDT}</small>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRentals;
