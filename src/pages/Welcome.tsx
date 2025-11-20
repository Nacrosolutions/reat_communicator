import { CenterWrapper, TextBox,  StyledFormDiv, StyledImage, StyledPara, StyledChildPara, Button, StyledButton } from "./Welcome.styles";
import welcome from "../assets/welcome.svg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../store/store";
const Welcome = () => {

  const {token}=useSelector((state:RootState)=>state.auth);

  return (
    <CenterWrapper>

  <TextBox>
    <StyledFormDiv>
  <StyledPara>
    welcome,to Communicator app
  </StyledPara>
  <StyledChildPara>
    The Communicator App is a modern messaging platform that allows seamless real-time chat with multiple users while giving you full control over user management. It supports group and one-to-one conversations, lets you add or remove users, and provides an intuitive interface for tracking active sessions. Designed for efficiency and collaboration, the app ensures smooth communication and easy administration in a single unified space.
  </StyledChildPara>
    {!token && (
  <StyledButton>
   
   <Link to="/signUp" style={{marginRight:"2rem"}}>

   <Button primary="orangeLight" radius="1rem" style={{color:"white",fontWeight:500,fontSize:"14px",border:"0px solid"}} ><span style={{fontSize:"16px"}}>Register <FaLongArrowAltRight/> </span></Button>

</Link>
   <Link to="/signin">

   <Button primary="orangeLight" radius="1rem" style={{color:"white",fontWeight:500,fontSize:"14px",border:"0px solid"}} className="table-hover"><span style={{fontSize:"16px"}}>Login <FaLongArrowAltRight/> </span></Button>

</Link>
</StyledButton>)}

          </StyledFormDiv>

      </TextBox>
             <StyledImage src={welcome} alt="welcome     illustration" />
       </CenterWrapper>
  );
};

export default Welcome;
