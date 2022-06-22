import './App.css';
import {Sidebar} from "./Sidebar"
import {Topbar} from "./Topbar"
import {Dashboard} from "./Dashboard"
import Footer from "./Footer"
import React from "react";
import { Routes,Route,Link ,Navigate, useNavigate} from "react-router-dom";
import { Buttons } from './Buttons';
import { Cards } from './Cards';
import { Colors } from './Colors';
import { Borders } from './Borders';
import { Animations } from './Animations';
import { Other } from './Other';
import { Login } from './Login';

function App() {
  return (
      <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div className="container-fluid">
            <section className="routes-container">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/Buttons" element={<Buttons/>}/>
                <Route path="/Cards" element={<Cards/>}/>
                <Route path="/Colors" element={<Colors/>}/>
                <Route path="/Borders" element={<Borders/>}/>
                <Route path="/Animations" element={<Animations/>}/>
                <Route path="/Other" element={<Other/>}/>
                <Route path="/Login" element={<Login/>}/>
                {/* <Route path="/Dashboard" element={<Navigate replace to="/"/>}/> */}
                {/* <Route path="/404" element={<NotFound/>}/>
                <Route path="/*" element={<Navigate replace to="/404"/>}/>
                <Route path="/basic-form" element={<BasicForm/>}/> */}
            </Routes>
            </section>  
            </div>
          </div>
          <Footer/>
          </div>
          {/* <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div> */}
         
      </div>
  );
}

export default App; 


