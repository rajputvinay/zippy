import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   email: "",
  // });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    try {
      const res = axios
        .post("http://127.0.0.1:5000/register", formData)

        .then((res) => {
          alert("Register Success");
          navigate("/");
          // setIsLoggedIn(true);
          localStorage.setItem("token", res.data.token);
        });
    } catch (error) {
      alert(error?.response?.data?.message);
    }

    setEmail("");
    setPassword("");
    setLastName("");
    setFirstName("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow p-8 mx-4 sm:mx-auto max-w-md w-full space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="text-gray-700 block">
              firstName
            </label>
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-gray-700 block">
              lastName
            </label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700 block mt-4">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 rounded-md text-white font-semibold tracking-wide hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
            >
              Register
            </button>
            <Link to="/Login">
              <p className="text-blue-400 underline ml-2">Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
