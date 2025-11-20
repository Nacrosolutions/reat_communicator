import { StyledHeaderDiv, StyledParaDiv } from "./Header.styles";
import HeaderDropdown from "./HeaderDropdown";


const Header =()=>{
    return (
        <StyledHeaderDiv>
  <div>
<StyledParaDiv>COMMUNICATOR</StyledParaDiv>
  </div>

  <div>
    <HeaderDropdown props={["Home","Manage User"]} toList={["/","/manageUser"]}></HeaderDropdown>
  </div>

        </StyledHeaderDiv>
    )
}

export default Header;