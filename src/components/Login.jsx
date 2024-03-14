import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../config/firebaseData';
import '../App.css';

const auth = getAuth(app);

const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  
  const signinUser=()=>{
    signInWithEmailAndPassword(auth,email,password)
   
 
   
  }
  return (
    <div>

<section className="background-radial-gradient overflow-hidden">
 
 

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{"zIndex": 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{"color": "hsl(218, 81%, 95%)"}}>
          The best offer <br />
          <span style={{"color": "hsl(218, 81%, 75%)"}}>for your business</span>
        </h1>
        <p className="mb-4 opacity-70" style={{"color": "hsl(218, 81%, 85%)"}}>
        Welcome to Humanli.ai’s partner program. This program is designed to foster collaboration and mutual success between Humanli.ai and our valued partners. By becoming our partner, you’ll have the opportunity to leverage our cutting-edge AI technology to enhance your solutions and deliver unparalleled value to your customers.
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
            

              {/* Email input*/}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="form3Example3" className="form-control" />
               
              </div>

              {/* Password input*/}
              <div className="form-outline mb-4">
              <label className="form-label" for="form3Example4">Password</label>
                <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password} id="form3Example4" className="form-control" />
               
              </div>

              {/* Checkbox*/}
           

              {/* Submit button*/}
              <button onClick={signinUser} type="submit" className="btn btn-primary btn-block mb-4">
                Login
              </button>

              {/* Register buttons*/}
              <div className="text-center">
              <label className="form-label" htmlFor="form3Example4">If you are not register ! Please </label>
                <NavLink to="/Signup">Signup</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* {/* Section: Design Block */ }
    </div>
  )
}

export default Login
