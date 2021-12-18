import React from "react";
import { StyleSheet } from "react-native";

import { TouchableButton } from "./styles";
import { StyledIconLabelButtonProps } from "../interface";


export const IconLabelButton: React.FC<StyledIconLabelButtonProps> = ({
  label,
  onPress,
  size = "large",
  color = "primary",
  hasShadow = false,
  ...rest
}: StyledIconLabelButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      color={color}
      size={size}
      style={hasShadow === true && styles.boxShadow}
      {...rest}
    >
      <TouchableButton.View>

        <TouchableButton.Label color={color}> {label} </TouchableButton.Label>
      </TouchableButton.View>
    </TouchableButton>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#bdbdbd",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
