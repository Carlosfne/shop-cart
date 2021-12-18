import React from "react";
import { Card as CardView } from "./styles";

export interface CardProps {
  message: string;
  variant?: "filled" | "outlined";
  align?: "left" | "center";
  style?: {}
}

export const Card: React.FC<CardProps> = ({
  message,
  variant = "filled",
  align = "center",
  style
}) => {
  return (
    <CardView variant={variant} style={style}>
      <CardView.Text variant={variant} align={align}>
        {message}
      </CardView.Text>
    </CardView>
  );
};
