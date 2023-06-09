import { useState } from "react";
const JitendraApp = () => {
  const [Name, setName] = useState("Enter name");
  const [Email, setEmail] = useState("Enter email");
  const [Password, setPasssword] = useState("Enter password");
  const [City, setCity] = useState("Enter city");
  const [Gender, setGender] = useState("Enter city");
  const [Hobbies, setHobbies] = useState("Enter city");

  const handleNamechange = (e) => {
    setName(e.target.value);
  };
  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordchange = (e) => {
    setPasssword(e.target.value);
  };
  const handleCitychange = (e) => {
    setCity(e.target.value);
  };
  const handleGenderchange = (e) => {
    setGender(e.target.value);
  };
  const handleHobbiesChange = (e) => {
    setHobbies(e.target.value);
  };

  return (
    <div>
      <label>name</label>
      <input type="text" name="Name" onChange={handleNamechange} />
      <br />
      <label>email</label>
      <input type="Email" name="email" onChange={handleEmailchange} />
      <br />
      <label>password</label>
      <input type="password" name="Password" onChange={handlePasswordchange} />
      <br />
      <label>city</label>
      <select name="city" onChange={handleCitychange}>
        <option>select city</option>
        <option value="bbsr">BBSR</option>
        <option value="ctc">CTC</option>
        <option value="puri">PURI</option>
      </select>
      <br />
      <label>gender</label>
      &nbsp;&nbsp;&nbsp;&nbsp;<label>male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleGenderchange}
      />
      <label>female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleGenderchange}
      />
      <br />
      <label>Hobbies</label>
      &nbsp;&nbsp;&nbsp;&nbsp;<label>Running</label>
      <input
        type="checkbox"
        name="hobbies"
        value="running"
        onChange={handleHobbiesChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;<label>Dance</label>
      <input
        type="checkbox"
        name="hobbies"
        value="dance"
        onChange={handleHobbiesChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;<label>swimming</label>
      <input
        type="checkbox"
        name="hobbies"
        value="swimming"
        onChange={handleHobbiesChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;<label>gamming</label>
      <input
        type="checkbox"
        name="hobbies"
        value="gamming"
        onChange={handleHobbiesChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;<label>radding</label>
      <input
        type="checkbox"
        name="hobbies"
        value="radding"
        onChange={handleHobbiesChange}
      />
      <p>Name:{Name}</p>
      <p>Email:{Email}</p>
      <p>Password:{Password}</p>
      <p>City:{City}</p>
      <p>Gender:{Gender}</p>
      <p>Hobbie:{Hobbies}</p>
    </div>
  );
};
export default JitendraApp;
