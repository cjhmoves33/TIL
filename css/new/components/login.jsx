import React from 'react';
import './login.scss'

const Login = () => {
  

  return (
    <div id="twittler" class="result">
      <div id="twittler-logo"></div>
      <div id="twittler-title">TWITTLER</div>
      <form class="input">
        <label>email</label>
        <input type="email" placeholder="abc@domain.com" required />

        <label>password</label>
        <input type="password" placeholder="min 6character long" required minlength="6" maxlength="15" />
        <input type="submit" value="LOG IN" />
      </form>
    </div>
  )
}

export default Login;