import React from "react";
import { StyleSheet } from 'react-native'

import { TouchableButton } from "./styles";
import { StyledIconButtonProps } from "../interface";

export const IconButton: React.FC<StyledIconButtonProps> = ({
  onPress,
  size = "large",
  color = "primary",
  hasShadow = false,
  children,
  ...rest
}: StyledIconButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      color={color}
      size={size}
      style={hasShadow === true && styles.boxShadow}
      {...rest}
    >
      { children }
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
