import logo from './logo.svg';
import './App.css';
import {Sidebar} from "./Sidebar"
import {Topbar} from "./Topbar"
import {Dashboard} from "./Dashboard"
import React from "react";
import { Routes,Route,Link ,Navigate, useNavigate} from "react-router-dom";

function App() {
  return (
      <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div className="container-fluid">
               <Dashboard/>
            </div>
          </div>
          </div>
      </div>
  );
}

export default App; 