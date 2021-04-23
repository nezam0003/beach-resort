import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

// Get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    breakfast,
    pets,
  } = context;

  // get unique type
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search room" />
      <div className="container">
        <div className="row">
          <div className="col-11 mx-auto col-md-10">
            <div className="card shadow text-dark bg-light p-3">
              <div className="card-body">
                <form>
                  {/* select type */}
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label
                        className="form-label text-capitalize"
                        htmlFor="type"
                      >
                        room type
                      </label>
                      <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-select"
                        onChange={handleChange}
                      >
                        {types}
                      </select>
                    </div>

                    {/* select type end */}
                    {/* select capacity */}

                    <div className="col-md-4">
                      <label
                        className="form-label text-capitalize"
                        htmlFor="capacity"
                      >
                        Guests
                      </label>
                      <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-select"
                        onChange={handleChange}
                      >
                        {people}
                      </select>
                    </div>

                    {/* select capacity end */}
                    {/* Room Price */}
                    <div className="col-md-4">
                      <label
                        className="form-label text-capitalize"
                        htmlFor="price"
                      >
                        room price ${price}
                      </label>
                      <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-range"
                      />
                    </div>
                    {/* Room Price End */}

                    {/* Size */}
                    {/* <div className="col-md-4">
                      <label className = "form-label text-capitalize" htmlFor="size">room size</label>
                      <div className="size-inputs">
                        <input
                          type="number"
                          name="minSize"
                          id="size"
                          value={minSize}
                          onChange={handleChange}
                          className="size-input"
                        />
                        <input
                          type="number"
                          name="maxSize"
                          id="size"
                          value={maxSize}
                          onChange={handleChange}
                          className="size-input"
                        />
                      </div>
                    </div> */}
                    {/* Size End */}
                    {/* Extras */}
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="breakfast"
                          id="breakfast"
                          className="form-check-input"
                          checked={breakfast}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="breakfast">
                          breakfast
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="pets"
                          id="pets"
                          className="form-check-input"
                          checked={pets}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="pets">
                          pets
                        </label>
                      </div>
                    </div>
                    {/* Extras end */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsFilter;
