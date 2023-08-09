//import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import Login from "./Day25-HOCLoginForm/Login.jsx";
// import WithUseRef from "./Day28-UseRef/2.WithUseRef.jsx";
// import WithoutUseRef from "./Day28-UseRef/1.WithoutUseRef.jsx";
// import CreateOTPForm from "./OTP-Task/1.FormOTP.jsx";
//import { store } from './@reduxjs/toolkit'
import { Provider } from "react-redux";
import { ProductLists } from "./Day31-Slice-Reducer/ProductCartRedux/3.ProductCartAPI.jsx";
import { storeSlice } from "./Day31-Slice-Reducer/ProductCartRedux/2.ProductsStore.jsx";
import ShowCart from "./Day31-Slice-Reducer/ProductCartRedux/4.ShowCart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import ParentV22_1 from "./Day22-ParentMemoIssue/3.ParentV22-1.jsx";
//import FakeApiResponse from "./Day16-Postman/2.FakeAPIAddToCart.jsx";
//import ParentMemo from "./Day19-Memo/1.ParentMemo.jsx";
//import ParentComponent from "./Day10-PropsCallBack-ChildToParent/1.Parent.comp.jsx";
// import MyClassComponent from './Day1-Components/1.ClassComponent.jsx'
// import Homepage from './Homepage.jsx'
// import StateWithCC from './Day2-State/1.StateInComponent.jsx'
// import StateWithCC2 from './Day2-State/2.VikashComponent.jsx'
// import Calcualtor from './Day2-State/3.Calculator.jsx'
// import Login from './Day2-State/4.LoginForm.jsx'
// import FormCC from './Day3-FormComponent.Layout/1.FormComponentLayout.jsx'
// import FCCounter from './Day4-Function/1.FunctionComponent.jsx'
//import InputForm from './Day5-CreateFunctionalCOmponent/1.FormInFunctionalComponent.jsx'
// import ParentView from './Day6-State-Props/1.ParentView.jsx'
// import HomeView from "./Day7-Dynamic-Prop/1.Home-viewdynamic-prop.jsx";
// import ParentColorComponent from "./Day7-Dynamic-Prop/3.Parent-Button-Color.jsx";
//import ProductView from "./Day8-Parent-Class-Parent-Data-Transfer/1.Parent-add-to-card.jsx"
//import ListRender from "./Day9-PropsFunctionPass/1.ListRender.jsx";
//import ListRenderAdd from "./Day9-PropsFunctionPass/2.AddList.jsx";
//import ConditionalRenderingV1 from "./Day11-Conditional-Rendering/1.Conditional-Rendering.jsx";
//import ConditionalRenderingForm from "./Day11-Conditional-Rendering/2.Conditional-Form.jsx";
//import ProductListSpinner from "./Day12-Mounting-API-Call/2.product-list.Layout.jsx";
//import UseEffectExample from "./Day13-UseEffect/1.UseEffect-RunOnce-OnChange.jsx";
// import UseEffectExamplesV1TotalCount from "./Day15-UseEffect-Uses/1.TotalPriceCount.jsx";
// import Toggle from "./Day15-UseEffect-Uses/2.Toggle-Conditional.jsx";
// import ToggleV2 from "./Day15-UseEffect-Uses/3.ToogleV2.jsx";
// import ShowHideFifth from "./Day15-UseEffect-Uses/4.Mounting-Mouse-Coordinates.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MyProducts />,
//   },
//   {
//     path: "/product/:id",
//     element: <ProductDetails />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductLists />,
  },
  {
    path: "/showcart",
    element: <ShowCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />
    {/* <ParentView />
    <HomeView/>
    <ParentColorComponent/> */}
    {/* <ProductView/> */}
    {/* <ListRender/>
    <ListRenderAdd/>
     */}
    {/* <ParentComponent/> */}
    {/* <ConditionalRenderingV1/>
     <ConditionalRenderingForm/> */}
    {/* <ProductListSpinner/> */}
    {/* <UseEffectExample/> */}
    {/* <UseEffectExamplesV1TotalCount/>
     <Toggle/>
     <ToggleV2/>
     <ShowHideFifth/> */}
    {/* <FakeApiResponse/> */}
    {/* <ParentMemo/> */}
    {/* <ParentV22_1 /> */}
    {/* {Login} */}
    {/* <WithUseRef />
    <WithoutUseRef />
    <CreateOTPForm /> */}
    {/* <ProductLists /> */}
    <Provider store={storeSlice}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </div>
);
