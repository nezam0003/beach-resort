import React, { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("submited")
    if (user.name && user.email && user.message && user.address && user.phone) {
      setUser({
        name: "",
        email: "",
        message: "",
        address: "",
        phone: "",
      });
    } else {
      alert("give all the information");
    }
  };
  return (
    <>
      <div className="card bg-dark text-light">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                autoComplete="off"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                autoComplete="off"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={user.address}
                autoComplete="off"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" classphone="form-label">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={user.phone}
                autoComplete="off"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={user.message}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
