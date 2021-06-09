import React, { useEffect, useState } from "react";
import { axios } from "../utils/axios";

const BookRoom = () => {
  const [addClients, setAddClients] = useState([]);

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    room: "",
    guest: "",
    checkIN: "",
    checkOut: "",
  });

  // const noClients = !addClients || addClients.length === 0;

  const getClients = async () => {
    const response = await axios
      .get("/clients")
      .catch((error) => console.log("error ", error));
    if (response && response.data) {
      setAddClients(response.data);
    }
  };

  const addNewClient = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("/clients", userInfo)
      .catch((error) => console.log("Error", error));
    if (response) await getClients();
    setUserInfo({
      name: "",
      phone: "",
      room: "",
      guest: "",
      checkIN: "",
      checkOut: "",
    });
  };

  useEffect(() => {
    getClients();
  }, []);

  const inputFieldHandller = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
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
                  <form onSubmit={addNewClient}>
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
                          htmlFor="checkIN"
                          className="form-label text-capitalize"
                        >
                          check-in
                        </label>
                        <input
                          type="date"
                          name="checkIN"
                          id="checkIN"
                          value={userInfo.checkIN}
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
