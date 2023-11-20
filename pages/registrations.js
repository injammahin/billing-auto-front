import axios from "axios";
import React, { useState } from "react";

const registrations = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async () => {
    let x = await axios.post("http://localhost:2000/auth/signup", {
      name,
      email,
      companyName,
      phone,
      password,
    });
    console.log(x.data);
  };
  return (
    <div>
      <label>
        Name:
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
      </label>
      <br />
      <label>
        CompanyName:
        <input
          onChange={(e) => setcompanyName(e.target.value)}
          type="text"
          name="companyName"
        />
      </label>
      <br />
      <label>
        phone:
        <input
          onChange={(e) => setphone(e.target.value)}
          type="phone"
          name="phone"
        />
      </label>
      <br />
      <label>
        password:
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          name="password"
        />
      </label>
      <br />

      <button onClick={handleSubmit}> signup</button>
    </div>
  );
};

export default registrations;
