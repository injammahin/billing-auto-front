// import { axios } from "axios";
// import React, { useState } from "react";

// const login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   const handleSubmit = async () => {
//     let x = await axios.post("http://localhost:2000/auth/signin", {
//       email,

//       password,
//     });
//     console.log(x.data);
//   };
//   return (
//     <div>
//       <label>
//         email:
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           name="password"
//         />
//       </label>
//       <br />
//       <label>
//         password:
//         <input
//           onChange={(e) => setpassword(e.target.value)}
//           type="password"
//           name="password"
//         />
//       </label>
//       <br />
//       <button onClick={handleSubmit}> Signin</button>
//     </div>
//   );
// };

// export default login;
import axios from "axios";
import React, { useState } from "react";

const registrations = () => {
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");

  const handleSubmit = async () => {
    let x = await axios.post("http://localhost:2000/auth/signin", {
      email,

      password,
    });
    console.log(x.data);
  };
  return (
    <form>
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
        password:
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          name="password"
        />
      </label>
      <br />

      <button onClick={handleSubmit}> signin</button>
    </form>
  );
};

export default registrations;
