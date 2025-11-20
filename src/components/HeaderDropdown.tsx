import { Link } from "react-router-dom";
import { CustomDropdown } from "./HeadeDropdown.style";
import { logout } from "../auth/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../store/store";
import { clearUsers } from "./users/slices/userSlice";
import client from "../apollo/client";
import { useNavigate } from "react-router-dom"; // if you are using react-router

interface HeaderDropdownProps {
  props: string[]; 
  toList:string[]
}


  // logout()


const HeaderDropdown = ({props,toList}:HeaderDropdownProps) => {
const token = useSelector((state:RootState) => state.auth.token);
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
const role = localStorage.getItem('role');
const email = localStorage.getItem('email');


function logoutHandler(){
dispatch(logout())
dispatch(clearUsers());
  client.clearStore();
  navigate('/')
}

  return (
    <CustomDropdown>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          {email?.split('@')[0] || "Log in"}
        </button>
          <ul className="dropdown-menu" style={{ right: 0, left: "auto" }} >

          {props.map((elNode,index)=><Link  key={index} to={toList[index]} className="dropdown-item">{elNode}</Link>)}
             {role === "admin" && <Link to="/signup" className="dropdown-item">Register</Link>}

   {!token ? <Link to="/signin" className="dropdown-item">Log in</Link>:<button className="dropdown-item" onClick={logoutHandler}>Logout</button>}
        </ul>
      </div>
    </CustomDropdown>
  );
};

export default HeaderDropdown;
