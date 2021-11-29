import { Button, Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/user/signup`;

    const newUser = await axios
      .post(URL, data)
      .catch((error) => console.log("Something went wrong", error));

    console.log(newUser);
  };

  return (
    <div className="signin">
      <>
      <form className="form">
        <h2>Create Account</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            className="inputfieldtext"
            type="text" 
            id="name"
            placeholder="Enter name">
          </input>
        </div>
        <div>
          <label htmlFor="email">Phone</label>
          <input 
            className="inputfieldtext"
            type="phone" 
            id="phone"
            placeholder="Enter phone">
          </input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            className="inputfieldtext"
            type="password" 
            id="password"
            placeholder="Enter password">
          </input>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input 
            className="inputfieldtext"
            type="password" 
            id="confirmpassword"
            placeholder="Enter password again">
          </input>
        </div>
        <div className="pink__button">
          <Button variant="contained" onClick={handleSignup} type="submit">Sign Up</Button>
        </div>
        <div>
          <span>Already have an account?</span> 
          <Link to="/login">
            <Button variant="contained">Login</Button>
          </Link>
        </div>
      </form>
      </>
    </div>
  );
};

export default Signup;