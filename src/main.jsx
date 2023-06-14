//import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import MyClassComponent from './Day1-Components/1.ClassComponent.jsx'
// import Homepage from './Homepage.jsx'
// import StateWithCC from './Day2-State/1.StateInComponent.jsx'
// import StateWithCC2 from './Day2-State/2.VikashComponent.jsx'
// import Calcualtor from './Day2-State/3.Calculator.jsx'
// import Login from './Day2-State/4.LoginForm.jsx'
// import FormCC from './Day3-FormComponent.Layout/1.FormComponentLayout.jsx'
// import FCCounter from './Day4-Function/1.FunctionComponent.jsx'
//import InputForm from './Day5-CreateFunctionalCOmponent/1.FormInFunctionalComponent.jsx'
import ParentView from './Day6-State-Props/1.ParentView.jsx'
import HomeView from "./Day7-Dynamic-Prop/1.Home-viewdynamic-prop.jsx";
import ParentColorComponent from "./Day7-Dynamic-Prop/3.Parent-Button-Color.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />    
    <ParentView />
    <HomeView/>
    <ParentColorComponent/>
  </div>
);
