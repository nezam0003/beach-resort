import React, { Component } from "react";

import {
  FaUserCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default class ContactInfo extends Component {
  state = {
    data: [
      {
        icon: <FaUserCircle />,
        head: "Emon Ahmed Alif",
        subHead: "Beach Resort",
      },
      {
        icon: <FaMapMarkerAlt />,
        head: "Address",
        subHead: "Nikunja-2, khilkeht, Dhaka",
      },
      {
        icon: <FaEnvelope />,
        head: "Email",
        subHead: "www.Beachresort.com",
      },
      {
        icon: <FaPhone />,
        head: "Phone",
        subHead: "+8801627629729",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.data.map((item, index) => {
          return (
            <div className="address-content" key={index}>
              <span>{item.icon}</span>
              <div className="address-info">
                <p className="head">{item.head}</p>
                <p className="sub-head">{item.subHead}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
