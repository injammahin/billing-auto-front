import axios from "axios";

import React from "react";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let res = localStorage.getItem("userId");
    axios
      .get("http://localhost:2000/auth/profile", { headers: { id: res } })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>User Profile</h1>

          <div>
            <label>Name</label>
            <p>{data.name}</p>
          </div>

          <div>
            <label>Phone Number</label>
            <p>{data.phone}</p>
          </div>

          <div>
            <label>Email</label>
            <p>{data.email}</p>
          </div>
          <div>
            <label>Company Name</label>
            <p>{data.companyName}</p>
          </div>
        </div>
      </div>
    </>
  );
}
