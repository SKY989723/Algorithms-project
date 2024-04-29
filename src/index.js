import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar2 from './navbar/Navbar2';
import Home from "./pages/Home"
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import BisectionPractical from './component/Bisection/BisectionPractical';
import BisectionMethod from './component/Bisection/BisectionTheory';
import regulafalsiPractical from './component/regulafalsi/regulafalsiPractical';
import RegulaFalsiP from './component/regulafalsi/regulafalsiPractical';
import RegulaFalsiT from './component/regulafalsi/regulafalsiTheory';
import AboutPage from './pages/about';
import ContactUsPage from './pages/contact';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar2/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/bisection-Practical' element={<BisectionPractical/>}/>
      <Route path='/bisection-Method'  element={<BisectionMethod/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Contact' element={<ContactUsPage/>}/>
      <Route path='/regulafalsi-Practical' element={<RegulaFalsiP/>}/>
      <Route path='/regulafalsi-Theory' element={<RegulaFalsiT/>}/>
      

  </Route>
))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
