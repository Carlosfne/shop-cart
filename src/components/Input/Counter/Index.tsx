import React, { useState, useEffect } from "react";

import { Feather } from "@expo/vector-icons";
import { CounterContainer, CounterIndex } from "./styles";
import { IconButton } from "../../../components/Button/Index";
import { Text } from "../../../components/Typografy/Index";
import { ProductItemProps } from "../../ItemProduct/Add/Index";

import { useProduct } from "../../../contexts/ProductContext";

export interface CounterInputProps {
  hasQuantity?: boolean;
  product?: ProductItemProps;
  style?: {};
}

export const CounterInput: React.FC<CounterInputProps> = ({
  hasQuantity = false,
  product,
  style,
}: CounterInputProps) => {
  const { currentProduct, setCurrentProduct, updateProductById } =
    useProduct();
  const [currentQuantity, setCurrentQuantity] = useState(
    currentProduct.quantity 
  );

  useEffect(() => {
    const product = {
      ...currentProduct,
      quantity: currentQuantity,
    } as ProductItemProps;

    setCurrentProduct(product);
  }, [currentQuantity]);

  return (
    <CounterContainer style={style}>
      <IconButton
        size="small"
        color="secondary"
        onPress={() => {
          hasQuantity
            ? product != undefined &&
            updateProductById(product.id, {
                ...product,
                quantity: product.quantity === 1 || product.quantity == undefined ? 1 : product.quantity - 1,
              })
            : setCurrentQuantity(
                currentQuantity === 1 ? 1 : currentQuantity - 1
              );
        }}
      >
        <Feather name="minus" size={18} color="white" />
      </IconButton>

      <CounterIndex>
        <Text.SubtitleBold style={{ fontSize: 14 }}>
          {hasQuantity
            ? String(product?.quantity).padStart(2, "0").split("")
            : String(currentQuantity).padStart(2, "0").split("")}
        </Text.SubtitleBold>
      </CounterIndex>

      <IconButton
        size="small"
        onPress={() => {
          hasQuantity
            ? product != undefined &&
            updateProductById(product.id, {
                ...product,
                quantity: product.quantity + 1,
              })
            : setCurrentQuantity(
              currentQuantity + 1
              );
        }}
      >
        <Feather name="plus" size={18} color="white" />
      </IconButton>
    </CounterContainer>
  );
};
