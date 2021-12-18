import React from "react";
import { StyleSheet } from 'react-native'

import { TouchableButton } from "./styles";
import { StyledLabelButtonProps } from "../interface";

export const LabelButton: React.FC<StyledLabelButtonProps> = ({
  label,
  onPress,
  size = "large",
  color = "primary",
  hasShadow = false,
  ...rest
}: StyledLabelButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      color={color}
      size={size}
      style={hasShadow === true && styles.boxShadow}
      {...rest}
    >
      <TouchableButton.Label size={size} color={color}> {label} </TouchableButton.Label>
    </TouchableButton>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
