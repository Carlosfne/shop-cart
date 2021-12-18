import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";

import { Text } from "../../Typografy/Index";
import { CounterInput } from "../../Input/Index";
import { ProductContainer, ProductImage } from "./styles";

import { useProduct } from "../../../contexts/ProductContext";
import { ProductItemProps } from "../Add/Index";

export interface ProductItemListProps {
  id: number;
  title: string;
  productImage: string;
  quantity: number;
  variant?: "checkable" | "default";
  style?: {};
}

export const ProductItemList: React.FC<ProductItemListProps> = ({
  id,
  title,
  productImage,
  quantity = 1,
  variant = "default",
  style,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { deleteProductById, addInToDeleteProductList } = useProduct();

  const currentProduct: ProductItemProps = {
    id,
    title,
    productImage,
    quantity,
  };

  return (
    <ProductContainer style={style}>
      <ProductImage
        style={{
          resizeMode: "cover",
        }}
        source={{
          uri: productImage,
        }}
      />

      <ProductContainer.MainContent>
        <ProductContainer.MainContentTitle>
          <Text.Medium style={{ maxWidth: 165, marginBottom: 5 }}>
            {title}
          </Text.Medium>
          <CounterInput
            hasQuantity
            product={currentProduct}
            style={{ alignSelf: "flex-start" }}
          />
        </ProductContainer.MainContentTitle>

        {variant === "checkable" ? (
          <ProductContainer.MainContentCheck>
            <CheckBox
              style={{ right: 5 }}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => {
                setToggleCheckBox(newValue),
                addInToDeleteProductList(currentProduct, newValue);
              }}
            />
          </ProductContainer.MainContentCheck>
        ) : (
          <ProductContainer.MainContentClose
            onPress={() => {
              deleteProductById(id);
            }}
          >
            <Ionicons name="close" size={20} color="black" />
          </ProductContainer.MainContentClose>
        )}
      </ProductContainer.MainContent>
    </ProductContainer>
  );
};
