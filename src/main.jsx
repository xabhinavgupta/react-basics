import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyClassComponent from './Day1-Components/1.ClassComponent.jsx'
import Homepage from './Homepage.jsx'
import StateWithCC from './Day2-State/1.StateInComponent.jsx'
import StateWithCC2 from './Day2-State/2.VikashComponent.jsx'
import Calcualtor from './Day2-State/3.Calculator.jsx'
import Login from './Day2-State/4.LoginForm.jsx'
import FormCC from './Day3-FormComponent.Layout/1.FormComponentLayout.jsx'
import FCCounter from './Day4-Function/1.FunctionComponent.jsx'
import InputForm from './Day5-CreateFunctionalCOmponent/1.FormInFunctionalComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    <MyClassComponent/> 
    <Homepage/> 
    <StateWithCC/>
    <StateWithCC2/> 
    <Calcualtor/>
    <Login/>
    <FormCC/>
    <FCCounter/>
    <InputForm/>
  </React.StrictMode>,   
)

