import { Component } from "react";

class Login extends Component {
  state={
    email:"",
    counter: 0
  }
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
  this.setState=({
    counter : this.state.counter + 1,
  })
  console.log(this.counter);
};
export default Login;
