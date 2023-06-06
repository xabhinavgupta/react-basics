
function FormCCFunc() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
    htmlRadio: "",
    cssRadio: "",
    food: "",
    cars:"",
  });
  // how to write style ?


//   const onNameChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   const onEmailChange = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

//   onPasswordChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });

    this.setState({
      [name]: value,
    }),
      () => {
        console.log(this.state);
      };
    // this.render();
    // console.log(this.state);
  };

  
  
    return (
      <div style={{alignItems: 'center', margin: '10px', border:'1px solid silver', borderRadius:'10px', padding:'10px'}} >
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={this.state.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={onInputChange}
          />
        </div>
        <div>
          <input
            name="htmlRadio"
            type="radio"
            value="HTML"
            onChange={onInputChange}
          />
          <label>HTML</label>
          <input
            name="htmlRadio"
            type="radio"
            value="CSS"
            onChange={onInputChange}
          />
          <label>CSS</label>
        </div>
        <div>
          <label htmlFor="">Select food: </label>
          <input
            type="checkbox"
            name="food"
            id=""
            value="burger"
            onChange={this.onInputChange}
          />
          <label htmlFor="">Burger</label>
          <input
            type="checkbox"
            name="food"
            id=""
            value="pizza"
            onChange={this.onInputChange}
          />
          <label htmlFor="">Pizza</label>
        </div>
        <div>
          <ul name="list">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
          <ol name="list" type="I">
            <li>Item 1</li>
            <li>Item 2</li>
          </ol>
        </div>
        {/* <div>
          <video
            width="320"
            height="240"
            src="https://www.youtube.com/watch?v=ENPalcW0ffc"
            type="video/mp4"
          ></video>
        </div> */}
        <div>
          <table style={{border:'1px solid'}}>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
          </table>
        </div>
        <div>
        <label htmlFor="cars">Choose a car:</label>
  <select name="cars" id="cars" onChange={onInputChange}>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        </div>
      </div>
    );
  }

export default FormCCFunc;
