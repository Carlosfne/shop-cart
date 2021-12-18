import styled from "styled-components/native";

import { fonts } from "../../styles/fonts";
import { CardProps } from "./Index";

export const Card: any = styled.View<CardProps>`
  width: 100%;
  border-radius: 10px;
  padding: 20px 15px;
  background-color: ${({ theme, variant }) =>
    variant === "filled"
      ? theme.colors.cards.primary
      : theme.colors.transparent};
  border: ${({ theme, variant }) =>
    variant === "filled"
      ? "none"
      : `1px solid ${theme.colors.cards.secondary}`};
`;

Card.Text = styled.Text<CardProps>`
  font-size: 16px;
  font-family: ${fonts.text};
  text-align: ${({ align }) => align};
  color: ${({ theme, variant }) =>
    variant === "filled" ? "#fff" : theme.colors.cards.secondary};
`;
