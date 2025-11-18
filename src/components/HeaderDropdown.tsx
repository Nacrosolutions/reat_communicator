import { CustomDropdown } from "./HeadeDropdown.style";

interface HeaderDropdownProps {
  props: string[]; 
}

const HeaderDropdown = ({props}:HeaderDropdownProps) => {
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

          {props.map(elNode=><li><button className="dropdown-item">{elNode}</button></li>)}
   
        </ul>
      </div>
    </CustomDropdown>
  );
};

export default HeaderDropdown;
