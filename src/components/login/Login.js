import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [loginState, setLoginState] = useState({});
  const SubmitHandler = (e) => {
    e.preventDefault();
    const auth = async () => {
      try {
        //You can replace this with your own Api
        const api = "http://34.210.129.167/api/login";
        var res = await axios.post(api, loginState);
        console.log("response", res.data);
        const { data } = res;
        //place your own api response role here
        if (data.user.roles[0].name === "admin") {
          alert("Login Success");
        } else {
          alert("Invalid");
        }
      } catch (error) {
        console.log("Error", error.message);
      }
    };
    auth();
    console.log("State: ", loginState);
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={SubmitHandler}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          onChange={(e) => {
            const email = e.target.value;
            setLoginState({ ...loginState, ...{ email } });
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => {
            const password = e.target.value;
            setLoginState({ ...loginState, ...{ password } });
          }}
        />
        <button type="submit">Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
