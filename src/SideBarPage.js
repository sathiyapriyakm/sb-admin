import { useState } from "react";
import {useNavigate} from "react-router-dom";
export function SideBarPage() {
  const [show,setShow]= useState(false);
  const navigate=useNavigate();
  return (
    <>
      <li className="nav-item">
        <a onClick={() => setShow(!show)} className={show ? "nav-link collapsed" : "nav-link"} href="#" data-toggle="collapse" data-target="#collapsePages"
          aria-expanded={show ? "false" : "true"} aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div id="collapsePages" className={show ? "collapse show" : "collapse"} aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a onClick={()=>navigate("/Login")} className="collapse-item" href="#">Login</a>
            <a onClick={()=>navigate("/Register")} className="collapse-item" href="#">Register</a>
            <a onClick={()=>navigate("/Forgot-Password")} className="collapse-item" href="#">Forgot Password</a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a onClick={()=>navigate("/404-Page")} className="collapse-item" href="#">404 Page</a>
            <a onClick={()=>navigate("/Blank-Page")} className="collapse-item" href="#">Blank Page</a>
          </div>
        </div>
      </li></>
  );
}
