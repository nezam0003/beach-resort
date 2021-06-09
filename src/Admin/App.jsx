import React, { useState, useEffect, useContext } from "react";
import { axios } from "../utils/axios";

const AdminContext = React.createContext();

const AdminProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  //   const noClient = !clients || (clients && clients.length === 0);

  const getClients = async () => {
    const response = await axios
      .get("/clients")
      .catch((error) => console.log("error ", error));
    if (response && response.data) {
      setClients(response.data);
    }
  };

  const removeClient = async (id) => {
    const response = await axios.delete(`/clients/${id}`).catch((err) => {
      console.log("Error deleting: ", err);
    });
    if (response) await getClients();
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <AdminContext.Provider value={{ ...clients, getClients, removeClient }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useGlobalAdmin = () => {
  return useContext(AdminContext);
};

export { AdminProvider, AdminContext };
