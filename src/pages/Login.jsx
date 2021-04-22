import React, { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
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
    if (userInfo.name && userInfo.email && userInfo.phone && userInfo.message) {
      alert("form submission successfull");
      setUserInfo({
        name: "",
        email: "",
        password: "",
      });
    } else {
      alert("please give us your requried information");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row mt-5">
            <div className="col-10 mx-auto col-md-8">
              <div className="card bg-light shadow text-dark p-3">
                <div className="card-body">
                  <h2 className="text-capitalize text-center fw-bold">
                    admin login
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="g-3">
                      <div className="mb-2">
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
                      <div className="mb-2">
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
                      <div className="mb-2">
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
                        value="Submit"
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

export default Login;
