import styled from "styled-components/native";

import { fonts } from "../../../styles/fonts";
import { StyledLabelButtonProps } from "../interface";

export const TouchableButton: any = styled.TouchableHighlight<StyledLabelButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
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

  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "4px 0";

      case "medium":
        return "8px 0";

      default:
        return "12px 0";
    }
  }};
`;

TouchableButton.Label = styled.Text<StyledLabelButtonProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "13px";

      default:
        return "15px";
    }
  }};

  font-family: ${({ size }) => {
    switch (size) {
      case "medium":
        return fonts.text;

      default:
        return fonts.heading;
    }
  }};

  color: ${({ theme, color }) => {
    switch (color) {
      case "white":
        return theme.colors.button.text;

      default:
        return theme.colors.button.white;
    }
  }};
  text-transform: capitalize;
  text-align: center;
`;
