import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function SideBarUtil() {
  const [show,setShow]= useState(false);
  const navigate=useNavigate();
  return (
    <>
      <li className="nav-item">
        <a onClick={() => setShow(!show)} className={show ? "nav-link collapsed" : "nav-link"} href="#" data-toggle="collapse" data-target="#collapseUtilities"
          aria-expanded={show ? "false" : "true"} aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" className={show ? "collapse show" : "collapse"} aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a onClick={()=>navigate("/Colors")} className="collapse-item" href="#">Colors</a>
            <a onClick={()=>navigate("/Borders")} className="collapse-item" href="#">Borders</a>
            <a onClick={()=>navigate("/Animations")} className="collapse-item" href="#">Animations</a>
            <a onClick={()=>navigate("/Other")} className="collapse-item" href="#">Other</a>
          </div>
        </div>
      </li></>);
}
