import styled from "styled-components/native";

import { StyledIconButtonProps } from "../interface";

export const TouchableButton: any = styled.TouchableHighlight<StyledIconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 65px;

  width: 100%;
  height: 65px;


  border-radius: ${({ size }) => {
    switch (size) {
      case "small":
        return "5px";

      default:
        return "10px";
    }
  }};

  width: ${({ size }) => {
    switch (size) {
      case "small":
        return "42px";

      default:
        return "65px";
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "28px";

      case "medium":
        return "32px";

      default:
        return "65px";
    }
  }};

  background-color: ${({ theme, color }) => {
    switch (color) {
      case "white":
        return theme.colors.button.white;

      case "secondary":
        return theme.colors.button.secondary;

      default:
        return theme.colors.button.primary;
    }
  }};
`;

