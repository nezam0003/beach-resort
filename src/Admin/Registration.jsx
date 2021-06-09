import React, { useState } from "react";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    profession: "",
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
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.email &&
      userInfo.password &&
      userInfo.phone &&
      userInfo.profession
    ) {
      alert("form submission successfull");
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        profession: "",
      });
    } else {
      alert("please give us your requried information");
    }
  };

  return (
    <>
      <section className="registration">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8">
              <div className="card bg-light shadow text-dark p-3">
                <div className="card-body">
                  <h2 className="text-capitalize text-center fw-bold">
                    user registrarion form
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className=" row g-3">
                      <div className="col-md-6">
                        <label
                          htmlFor="firstName"
                          className="form-label text-capitalize"
                        >
                          first name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={userInfo.firstName}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="lastName"
                          className="form-label text-capitalize"
                        >
                          last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={userInfo.lastName}
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
                          htmlFor="profession"
                          className="form-label text-capitalize"
                        >
                          profession
                        </label>
                        <input
                          type="text"
                          name="profession"
                          id="profession"
                          value={userInfo.profession}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="email"
                          className="form-label text-capitalize"
                        >
                          email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={userInfo.email}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="password"
                          className="form-label text-capitalize"
                        >
                          password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={userInfo.password}
                          onChange={inputFieldHandller}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="d-grid d-sm-block">
                      <input
                        className="btn btn-info btn-lg  mt-3"
                        type="submit"
                        value="Register"
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

export default Registration;
