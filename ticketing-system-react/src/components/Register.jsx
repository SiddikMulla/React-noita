import React, { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import './Register.css'

const Register = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "Select Role",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const auth = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      if (formData.password === formData.confirmPassword) {
        auth.registerAction(formData);
        switchToLogin();
        return;
      } else {
        console.log("passwords dont match");
        setMessage("passwords dont match");
      }
      //console.log("Form data submitted:", formData);
    }
    alert("please provide a valid input");
    // Add your login logic here, such as sending a request to your server

    // You can use Axios or the Fetch API to send the data to your server for authentication
  };

  return (
    <div className="text-light" id="div1">
      <h1>Register</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div> 
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            className="bg bg-success text-light rounded-4"
          >
            <option value="user">Select Role</option>
            <option value="user">User</option>
            <option value="techsupport">Tech Support</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary rounded-4 mb-3" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
