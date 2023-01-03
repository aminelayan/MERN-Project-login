
import { Input, StepLabel } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Nav";

const Login = () => {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
    
  });

  const [errormsg, setErrormsg] = useState(null);
  const navigate = useNavigate()

  const changehandler = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", formInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log('----',res);
        if (res.data.msg == "success!") {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate("/");
        } else {
          setErrormsg(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (

    <div>
      <Header/>
      <h1>Sign in</h1>
      <form onSubmit={login}>
        {errormsg ? <p className="text-danger">{errormsg}</p> : ""}
        <div className="form-group mb-2">
          <StepLabel>Email: </StepLabel>
          <Input
            type="text"
            name="email"
            className="form-control"
            onChange={changehandler}
          />
        </div>
        <div className="form-group mb-2">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            className="form-control" 
            onChange={changehandler}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary col-md-2"
          value="Login"
        ></input>
        <Link to= {'/registration'}>Register</Link>
      </form>
    </div>
  );
};

export default Login;
