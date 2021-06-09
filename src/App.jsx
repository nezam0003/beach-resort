import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./Admin/Login";
import Registration from "./Admin/Registration";
import AdminDashboard from "./Admin/AdminDashboard";
import BookRoom from "./Admin/BookRoom";
import PublicRoute from "./utils/publicRoute";
import PrivateRoute from "./utils/privateRoute";
import CarRentals from "./components/CarRentals";
import AdminNavbar from "./components/AdminNavbar";
import { useGlobalContext } from "./AppProvider";

const App = () => {
  const { isAdminLogIn } = useGlobalContext();
  return (
    <>
      {isAdminLogIn ? <AdminNavbar /> : <Navbar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/contact" component={Contact} />
        <PublicRoute exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <PrivateRoute exact path="/dashboard" component={AdminDashboard} />
        <Route exact path="/book" component={BookRoom} />
        <Route exact path="/car" component={CarRentals} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
