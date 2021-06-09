import React, { useState, useEffect } from "react";
import { removeUserSession } from "../utils/Common";
import { useGlobalContext } from "../AppProvider";
import { axios } from "../utils/axios";
import { useGlobalAdmin } from "./App";

// const clientsURL = "http://localhost:8000/clients";

const AdminDashboard = (props) => {
  const [clients, setClients] = useState([]);
  const { setIsAdminLogIn } = useGlobalContext();
  const { removeClient } = useGlobalAdmin();

  const fetchClients = async () => {
    try {
      const response = await axios.get("/clients");
      console.log("Res ", response);
      const clientData = await response.data;
      console.log("data :", clientData);
      setClients(clientData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleLogout = () => {
    removeUserSession();
    setIsAdminLogIn(false);
    props.history.push("/login");
  };

  return (
    <>
      <section className="admin py-5">
        <div className="container-fluid">
          <div className="text-center">
            <input
              type="button"
              value="Logout"
              className="btn btn-danger"
              onClick={handleLogout}
            />
          </div>
        </div>
        {/* <ClientList {...clients} /> */}
        <div className="container-fluid pt-3">
          <h4 className="text-center">User Detials</h4>
          <div className="table-responsive"></div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Room</th>
                <th scope="col">Guest</th>
                <th scope="col">Check-In</th>
                <th scope="col">Check-Out</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {clients &&
                clients.map((client) => {
                  return (
                    <tr key={client.id}>
                      <th scope="row">{client.id}</th>
                      <td> {client.name} </td>
                      <td>{client.phone}</td>
                      <td>{client.room}</td>
                      <td>{client.guest}</td>
                      <td>{client.checkIN}</td>
                      <td>{client.checkOut}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeClient(client.id)}
                        >
                          remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
