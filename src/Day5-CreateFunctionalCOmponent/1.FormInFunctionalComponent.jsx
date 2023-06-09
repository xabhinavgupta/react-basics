import { useState } from "react";

let allHobbies = ""

const InputForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectGender, setGender] = useState("");
  const [sliderValue, setSliderValue] = useState(10);
  const [selectedHobbies, setSelectedHobbies] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onCityChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
  const onGenderChange = (e) => {
    setGender(e.target.value);
  };
  const onHobbyChange = (e) =>{
    console.log(e.target.value);
    allHobbies+= e.target.value +" ";
    console.log(allHobbies);
    setSelectedHobbies(e.target.value);
  }

  const clickSubmitMyForm = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Selected Option:", selectedOption);
    console.log("Slider Value:", sliderValue);
    console.log("Gender:", setGender);
    console.log("Hobbies:", setSelectedHobbies);
  };

  return (
    <form>
        <br/><br />
        <h3>New Login Form on 6/8/2023 using Function component</h3>
        <h5>Day5-1.FormInFunctionalComponent</h5>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div>
        <label htmlFor="dropdown">Dropdown:</label>
        <select
          id="dropdown"
          name="dropdown"
          value={selectedOption}
          onChange={onCityChange}
        >
          <option value="">Select an option</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Indore">Indore</option>
          <option value="Chandigarh">Chandigarh</option>
        </select>
      </div>
      <div value={selectGender}>
        <label htmlFor="gender">Gender: Male</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={onGenderChange}
          checked={setGender ==='Male'}
        />
        &nbsp;
        <label htmlFor="gender">Female</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={onGenderChange}
          checked={setGender ==='Female'}
        />
      </div>
      <div value={selectedHobbies}>
        <label htmlFor="hobbies">Hobbies:</label>
        <br /> <br />
        <input type="checkbox" name="cricket" id="cricket" value="cricket" checked={selectedHobbies} onChange={onHobbyChange} />
        <label htmlFor="">Cricket</label>
        <input type="checkbox" name="badminton" id="badminton" value="badminton" checked={selectedHobbies} onChange={onHobbyChange} />
        <label htmlFor="">Badminton</label>
        <input type="checkbox" name="volleyball" id="volleyball" value="volleyball" checked={selectedHobbies} onChange={onHobbyChange}/>
        <label htmlFor="">VolleyBall</label>
        <input type="checkbox" name="swimming" id="swimming" value="swimming" checked={selectedHobbies} onChange={onHobbyChange}/>
        <label htmlFor="">Swimming</label>
      </div>
      <div>
        <label htmlFor="slider">Rate:</label>
        <input
          type="range"
          id="slider"
          value={sliderValue}
          min={0}
          max={10}
          onChange={onSliderChange}
        />
        <span>{sliderValue}</span>
      </div>
      <button onClick={clickSubmitMyForm}>Submit</button>
    </form>
  );
};

export default InputForm;
