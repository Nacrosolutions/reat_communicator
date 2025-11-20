import styled from "styled-components";
import type { theme } from "../styles/theme";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 100%;
  max-width: 400px;
  


  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;
    gap: 1rem;
  }

  input {
    padding: 12px;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: 0.2s ease;

    &:focus {
      border-color: #007bff;
      box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.3);
    }
  }

  span {
    color: red;
    font-size: 14px;
    margin-top: -8px;
  }

  button {
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #007bff;
    color: white;
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: #0066d6;
    }

    &:active {
      scale: 0.97;
    }
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  

  width: 100%;
  max-width: 500px;
  

  margin: auto;
  padding: 40px;

  border-radius: 16px;
    box-shadow: 0 2px 10px rgba(233, 230, 230, 0.08);

  /* background: #ffffff; */

/* height: auto; */
min-height: 85vh;

  @media (max-width: 768px) {
    max-width: 95%;
    height: auto;
    padding: 25px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
  }
`;


export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px; /* important for mobile */
  /* background-color: red; */
`;

export const TextBox = styled.div`
  width: 100%;
  max-width: 500px; /* perfect size */
  background: white;
  padding: 20px;
  height: 100%;
border-radius: 10px 0 0 10px;
  
`


export const StyledImage = styled.img`
  width: 100%;
  max-width: 700px;        /* limit image size on large screens */
  max-height: 90vh;
  height: 100%;
  object-fit: cover;
  /* border-radius: 8px; */
  /* box-shadow: 0 6px 18px rgba(0,0,0,0.08); */
  flex: 0 0 420px;

  @media (max-width: 768px) {
    max-width: 0%;
    height: auto;
    flex: 1 1 100%;
  }
  @media (max-width: 468px) {
    max-width: 0%;
    height: 100%;
    flex: 1 1 50%;
  }
`;


export const StyledPara = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orangeDark};
  letter-spacing: 1px;
`;
export const StyledChildPara = styled(StyledPara)`
  font-size: 1.1rem;        /* matches the screenshot size */
  font-weight: 400;
  max-width: 520px;
  color: ${({ theme }) => theme.colors.secondary}; 
  line-height: 1.7;          /* soft readable spacing */
  letter-spacing: 0.3px;     /* subtle */
  /* max-width: 550px;          keeps line length readable */
  margin-top: 1rem;

`;


type ButtonProps = {
  primary?: keyof typeof theme.colors; // OR simply string
  radius?: string;
};
export const Button = styled.button<ButtonProps>`
  background: ${({ primary, theme }) =>
    primary ? theme.colors[primary] : theme.colors.secondary};

  color: white;
  padding: 10px 20px;
  border-radius: ${({ radius }) => radius || "0px"};
&:hover{
  background-color:${({ theme }) => theme.colors.orange};
}

`;

export const StyledButton =styled.div`

display:"flex";
flex-direction: column;
justify-content: space-between;
`