import './App.css';
import {Sidebar} from "./Sidebar"
import {Topbar} from "./Topbar"
import {Dashboard} from "./Dashboard"
import Footer from "./Footer"
import React from "react";
import { Routes,Route,Link ,Navigate} from "react-router-dom";
import { Buttons } from './Buttons';
import { Cards } from './Cards';
import { Colors } from './Colors';
import { Borders } from './Borders';
import { Animations } from './Animations';
import { Other } from './Other';
import { Login } from './Login';
import { ForgetPassword } from './ForgetPassword';
import { Register } from './Register';
import { NotFound } from './NotFound';
import { BlankPage } from './BlankPage';
import { Tables } from './Tables';
import { Charts } from './Charts';

function App() {
  return (
      <>
      <div id="wrapper">
          <Routes>

          <Route path="/Login" element={<Login/>}/>
          <Route path="/Forgot-Password" element={<ForgetPassword/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/" element={<MainBoard flow=""/>}/>
          <Route path="/Buttons" element={<MainBoard flow="Buttons"/>}/>
          <Route path="/Cards" element={<MainBoard flow="Cards"/>}/>
          <Route path="/Colors" element={<MainBoard flow="Colors"/>}/>
          <Route path="/Borders" element={<MainBoard flow="Borders"/>}/>
          <Route path="/Animations" element={<MainBoard flow="Animations"/>}/>
          <Route path="/Other" element={<MainBoard flow="Other"/>}/>
          <Route path="/Charts" element={<MainBoard flow="Charts"/>}/>
          <Route path="/Tables" element={<MainBoard flow="Tables"/>}/>
          <Route path="/404-Page" element={<MainBoard flow="404-Page"/>}/>
          <Route path="/Blank-Page" element={<MainBoard flow="Blank-Page"/>}/>
          <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
          <Route path="/Dashboard" element={<Navigate replace to="/"/>}/>
          </Routes>
      </div>
 </>
  );
}

export default App; 

function MainBoard({flow}){
    return (
        <>
             <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div className="container-fluid">
            <section className="routes-container">
               { 
               {
                   "":<Dashboard/>,
                   "Buttons":<Buttons/>,
                   "Cards":<Cards/>,
                   "Colors":<Colors/>,
                   "Borders":<Borders/>,
                   "Animations":<Animations/>,
                   "Other":<Other/>,
                   "404-Page":<NotFound/>,
                   "Blank-Page":<BlankPage/>,
                   "Charts":<Charts/>,
                   "Tables":<Tables/>
               }[flow]
               }
            </section>  
            </div>
          </div>
          <Footer/>
          </div>
          <a className="scroll-to-top rounded" href="#page-top">
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
                    <a className="btn btn-primary" href="#">Logout</a>
                </div>
            </div>
        </div>
    </div> 
         
      </div></>
    );
}



