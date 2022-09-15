import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login(props) {
  const [user, setuser] = useState({
    title: "",
    password: ""
  });
  const [login, setlogin] = useState([]);
  function handleSubmit(e) {
    setlogin(user);
    // props.data(user);
    e.preventDefault();
  }
  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="border border-12 border-primary"></div>
            <div class="card bg-white">
              <div class="card-body p-5">
                <form class="mb-3 mt-md-4" onSubmit={handleSubmit}>
                  <h2 class="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p class=" mb-5">Please enter your details !</p>
                  <div class="mb-3">
                    <label for="email" class="form-label ">Email</label>
                    <input required type="email" name="email" class="form-control" id="password" placeholder="*******" onChange={(e) => handleChange(e)}  />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label ">Password</label>
                    <input required type="password" name="password" class="form-control" id="password" placeholder="*******" onChange={(e) => handleChange(e)}  />
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-outline-dark bg-primary" type="submit"><Link to="/welcome" className="linkstyle">Login</Link></button>
                  </div>
                </form>
                    <div>
                      <p class="mb-0  text-center">Don't have account? <span
                        class="text-primary fw-bold"><Link to="/signup">Signup</Link></span></p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
  );
}

export default Login;
