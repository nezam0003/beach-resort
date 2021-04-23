import React, { useState } from "react";

const BookRoom = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    Phone: "",
    room: "",
    guest: "",
    checkIn: "",
    CheckOut: "",
  });

  const inputFieldHandller = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.name &&
      userInfo.phone &&
      userInfo.room &&
      userInfo.guest &&
      userInfo.checkIn &&
      userInfo.checkOut
    ) {
      setUserInfo({
        name: "",
        Phone: "",
        room: "",
        guest: "",
        checkIn: "",
        CheckOut: "",
      });
    } else {
      alert("please give us your requried information");
    }
  };

  return (
    <>
      <section className="registration py-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-10 mx-auto col-md-9">
              <div className="card bg-light shadow text-dark p-3">
                <div className="card-body">
                  <h2 className="text-capitalize text-center fw-bold">
                    Make reservation
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label
                          htmlFor="name"
                          className="form-label text-capitalize"
                        >
                          name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={userInfo.name}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="phone"
                          className="form-label text-capitalize"
                        >
                          phone
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          value={userInfo.phone}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="room"
                          className="form-label text-capitalize"
                        >
                          room
                        </label>
                        <input
                          type="number"
                          name="room"
                          id="room"
                          value={userInfo.room}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="guest"
                          className="form-label text-capitalize"
                        >
                          guest
                        </label>
                        <input
                          type="number"
                          name="guest"
                          id="guest"
                          value={userInfo.guest}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="checkIn"
                          className="form-label text-capitalize"
                        >
                          check-in
                        </label>
                        <input
                          type="date"
                          name="checkIn"
                          id="checkIn"
                          value={userInfo.checkIn}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="checkOut"
                          className="form-label text-capitalize"
                        >
                          check-out
                        </label>
                        <input
                          type="date"
                          name="checkOut"
                          id="checkOut"
                          value={userInfo.checkOut}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="d-grid d-sm-block">
                      <input
                        className="btn btn-success btn-lg  mt-3"
                        type="submit"
                        value="Send"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookRoom;
