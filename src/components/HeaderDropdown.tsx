import { Link } from "react-router-dom";
import { CustomDropdown } from "./HeadeDropdown.style";

interface HeaderDropdownProps {
  props: string[]; 
  toList:string[]
}

const HeaderDropdown = ({props,toList}:HeaderDropdownProps) => {
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

          {props.map((elNode,index)=><Link  to={toList[index]}className="dropdown-item">{elNode}</Link>)}
   
        </ul>
      </div>
    </CustomDropdown>
  );
};

export default HeaderDropdown;
