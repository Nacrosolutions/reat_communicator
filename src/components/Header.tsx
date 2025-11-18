import { StyledHeaderDiv, StyledParaDiv } from "./Header.styles";
import HeaderDropdown from "./HeaderDropdown";


const Header =()=>{
    return (
        <StyledHeaderDiv>
  <div>
<StyledParaDiv>COMMUNICATOR</StyledParaDiv>
  </div>

  <div>
    <HeaderDropdown props={["option1","option2"]}></HeaderDropdown>
  </div>

        </StyledHeaderDiv>
    )
}

export default Header;