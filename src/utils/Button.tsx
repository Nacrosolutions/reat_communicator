import styled from "styled-components";
import type { theme } from "../styles/theme";

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

`;
