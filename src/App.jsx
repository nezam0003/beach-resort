import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import BookRoom from "./components/BookRoom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login/admin" component={AdminDashboard} />
        <Route exact path="/book" component={BookRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
