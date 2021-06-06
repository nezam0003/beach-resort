import React from "react";
import { getUser, removeUserSession } from "../utils/Common";

const AdminDashboard = (props) => {
  const user = getUser();
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    <>
      <section className="admin py-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>welcome {user.name}</h2>
            <input
              type="button"
              value="Logout"
              className="btn btn-danger"
              onClick={handleLogout}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
