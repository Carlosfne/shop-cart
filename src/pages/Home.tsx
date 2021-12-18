import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { theme } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { MaterialIcons } from "@expo/vector-icons";

import { Header } from "../components/Header/Index";
import { Card } from "../components/Card/Index";
import { H2, Text } from "../components/Typografy/Index";
import { ProductItemList } from "../components/ItemProduct/Index";

import { useProduct } from "../contexts/ProductContext";

import { ProductItemProps } from "../components/ItemProduct/Add/Index";

export const Home: React.FC = () => {

  const { firstProductWasAdded, productList } = useProduct();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.srollview}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <Header />

        <View style={styles.content}>
          

          {!firstProductWasAdded ? (
            <Card
              style={{ marginTop: 40 }}
              message="Que tal começar a adicionar produtos para compra?"
            />
          ) : (
            <View>            

              <View style={styles.produtos}>
                <H2 style={{ fontFamily: fonts.complement }}>Seu Carrinho</H2>

                <View style={styles.controleCompra}>
                  <MaterialIcons
                    name="info"
                    size={28}
                    color="white"
                    style={{
                      marginRight: 10,
                    }}
                  />
                  <View>                   
                    <Text.Subtitle style={{ color: "white", fontSize: 14 }}>
                      {productList.length == 0
                        ? "Você ainda não adicionou nenhum produto a lista."
                        : productList.length == 1
                          ? "Você tem 1 item."
                          : `Você tem ${productList.length} itens.`}
                    </Text.Subtitle>
                  </View>
                </View>

                <View style={styles.productList}>
                  {productList.length != 0 &&
                    productList.map(
                      (product: ProductItemProps, index: number) => (
                        <ProductItemList
                          key={index}
                          id={product.id}
                          title={product.title}
                          productImage={product.productImage}
                          variant="default"
                          quantity={product.quantity}
                        />
                      )
                    )} 
                </View>
              </View>
            </View>
          )}
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  srollview: {
    paddingHorizontal: 30,
    paddingBottom: 130,
    flexGrow: 1,
  },
  content: {
    justifyContent: "space-between",
  },
  novidades: {
    marginTop: 20,
  },
  novidadesContent: {
    backgroundColor: theme.colors.cards.tertiary,
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  novidadesTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  produtos: {
    marginTop: 20,
  },
  controleCompra: {
    backgroundColor: theme.colors.cards.primary,
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productList: {
    marginTop: 10,
  },
});
