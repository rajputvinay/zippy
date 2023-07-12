import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manageLogin } from "../store/CartSlice";

const Login = () => {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const logInInfo = useSelector((store) => store.cart.isLoggedIn);
  console.log(logInInfo);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data2 = {
      email: email,
      password: password,
    };
    const res = axios
      .post("http://127.0.0.1:5000/login", data2)
      .then((res) => {
        alert("Login Success");
        Dispatch(manageLogin(true));
        localStorage.setItem("token", res.data.token);
      })
      // .then(Dispatch(manageLogin(true)))
      .then(navigate("/"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-300 px-3 py-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-md border border-gray-300 px-3 py-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 rounded-md text-white font-semibold tracking-wide hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
            >
              Login
            </button>
            <a href="register">
              <p className="text-blue-400 underline ml-2 text-center justify-center">
                Sign up
              </p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
