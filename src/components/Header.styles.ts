import styled from 'styled-components';



export const StyledHeaderDiv=styled.div`
    width:100%;
    /* height: 7rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2 2rem;
    background-color: ${({theme})=>theme.colors.light};
    border-bottom: 1px solid #e5e7eb;


  /* Tablet */
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  /* Mobile */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`


export const StyledParaDiv=styled.p`
letter-spacing: 0.2rem;
font-size: ${({theme})=>theme.font.base};
font-weight: 600;
padding:  2rem;
margin-top: 1rem;
  margin: 0;            /* Important: remove huge padding */

color: ${({theme})=>theme.colors.secondary};

  /* Mobile */
  @media (max-width: 480px) {
    font-size: 1.2rem;
    text-align: center;
  }

`
