import styled from "styled-components";


        // <div className="d-flex flex-column gap-3" style={{height:"75vh",backgroundColor:"red",margin:"10rem 5rem",display:"inline-block"}}>

export const StyledDiv=styled.div`

display: flex;
flex-direction: column;
gap: 3rem;
height: 75vh;
border-radius: 2rem;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
background-color: ${({theme})=>theme.colors.light};
margin: 5rem 5rem;
`


export const StyledUserTable =styled.div`

margin: 0 5rem;
border: 2px solid ${({theme})=>theme.colors.lightGray};
border-radius: 1rem;
margin-bottom: 1rem;
/* background-color: red; */
height:100vh;
`