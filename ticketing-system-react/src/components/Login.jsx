import React, { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import './Login.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Select",
  });

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
      auth.loginAction(formData);
      //console.log("Form data submitted:", formData);
      return;
    }
    alert("pleae provide a valid input");
    // Add your login logic here, such as sending a request to your server

    // You can use Axios or the Fetch API to send the data to your server for authentication
  };

  return (
    <div className="cotainer text-light mx-auto" id="main">
      <h2 className="text-light">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" id="div1">
       
          {/* <label htmlFor="email">Email</label> */}
          <input className="rounded-4 p-2"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group " id="div2">
      
          {/* <label htmlFor="password">Password</label> */}
          <input className="rounded-4 p-2"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Password"
          />
        </div>
        <div className="form-group" id="div3">
  
          <select className="rounded-4 p-2 bg bg-success text-light"
            name="role"
            id="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="Select">Select Role</option>
            <option value="user">User</option>
            <option value="techsupport">Tech Support</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="dis">
          <button className="btn btn-primary rounded-4" type="submit">Login</button>
        </div>

       
      </form>
    </div>
  );
};

export default Login;
