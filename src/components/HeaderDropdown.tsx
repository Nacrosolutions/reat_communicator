import { Link } from "react-router-dom";
import { CustomDropdown } from "./HeadeDropdown.style";
import { logout } from "../auth/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../store/store";

interface HeaderDropdownProps {
  props: string[]; 
  toList:string[]
}


  // logout()


const HeaderDropdown = ({props,toList}:HeaderDropdownProps) => {
const token = useSelector((state:RootState) => state.auth.token);
  
  const dispatch=useDispatch();


function logoutHandler(){
dispatch(logout())
}

  return (
    <CustomDropdown>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Select Option
        </button>

        <ul className="dropdown-menu">

          {props.map((elNode,index)=><Link  key={index} to={toList[index]} className="dropdown-item">{elNode}</Link>)}
   {!token ? <Link to="/signin" className="dropdown-item">Log in</Link>:<button className="dropdown-item" onClick={logoutHandler}>Logout</button>}
        </ul>
      </div>
    </CustomDropdown>
  );
};

export default HeaderDropdown;
