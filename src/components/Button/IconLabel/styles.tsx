import styled from "styled-components/native";

import { fonts } from "../../../styles/fonts";
import { StyledIconLabelButtonProps } from "../interface";

export const TouchableButton: any = styled.TouchableOpacity<StyledIconLabelButtonProps>`
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
        return "10px 0";
    }
  }};
`;

TouchableButton.View = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

TouchableButton.Label = styled.Text<StyledIconLabelButtonProps>`
  margin-left: 10px;
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "13px";

      default:
        return "14px";
    }
  }};

  font-family: ${fonts.heading};

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
