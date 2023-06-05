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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    <MyClassComponent/> 
    <Homepage/> 
    <StateWithCC/>
    <StateWithCC2/> 
    <Calcualtor/>
    <Login/>
  </React.StrictMode>,   
)

