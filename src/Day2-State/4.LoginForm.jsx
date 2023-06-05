import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <label>
            Email:
            <input
              type="text"
              value=""
              id="email"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" id="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit" onClick={userLogin}>
          Login
        </button>
      </form>
    );
  }
}
const userLogin = () => {
  console.log("button clicked");
};
export default Login;
