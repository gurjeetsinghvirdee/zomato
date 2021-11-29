import { TextField, Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/user/login`;

    const newUser = await axios
      .post(URL, data)
      .catch((error) => console.log("Something went wrong", error));

    newUser?.data && navigate("/");

    return;
  };

  return (
    <div className="signin">
      <form className="form">
        <h2>Log in to your account</h2>
        <div>
            <label htmlFor="phone">Phone</label>
            <input 
            defaultValue={data.phone || ""}
            onChange={handleChange}
            className="inputfieldtext"
            type="email" 
            id="phone"
            label="phone"
            placeholder="Enter phone">
            </input>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
            defaultValue={data.password || ""}
            onChange={handleChange}
            className="inputfieldtext"
            type="password" 
            id="password"
            placeholder="Enter password">
            </input>
        </div>
        <div className="pink__button">
            <Button onClick={handleLogin} variant="contained" type="submit">Login</Button>
        </div>
        <div>
          <Link to='/signup'>
            <Button variant='contained'>Signup</Button>
          </Link>
        </div>    
      </form>        
    </div>
  );
};

export default Login;