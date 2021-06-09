import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../utils/Common";
import { useGlobalContext } from "../AppProvider";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setIsAdminLogIn } = useGlobalContext();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:4000/users/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        setIsAdminLogIn(true);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          setError("something went wrong.");
        }
        console.log("error ", error);
      });
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-7">
              <div className="card bg-light shadow text-dark p-3">
                <div className="card-body">
                  <h2 className="text-capitalize text-center fw-bold">
                    admin login
                  </h2>
                  <form>
                    <div className="g-3">
                      <div className="mb-2">
                        <label
                          htmlFor="username"
                          className="form-label text-capitalize"
                        >
                          name
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {error && <p className="pt-2 text-danger">{error}</p>}
                    <div className="d-grid d-sm-block">
                      <input
                        className="btn btn-info  mt-2"
                        type="button"
                        value={loading ? "Loading" : "Login"}
                        disabled={loading}
                        onClick={handleLogin}
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
