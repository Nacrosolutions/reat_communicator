import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  radius?: string;
};

export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border-radius: ${(props) => props.radius || "0px"};
`;