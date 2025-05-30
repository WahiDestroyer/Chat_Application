import React from 'react'
import { Link } from 'react-router'

const LogIn = () => {
  return (
    <StyledWrapper>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input required name type="text" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required name type="password" />
            <label>Password</label>
          </div>
          <Link to="">
            <span />
            <span />
            <span />
            <span />
            Submit
          </Link>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="a2">
            Sign up!
          </Link>
        </p>
      </div>
    </StyledWrapper>
  );
}

export default LogIn
