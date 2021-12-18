import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Image,
  ToastAndroid,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modalize } from "react-native-modalize";

import { theme } from "../styles/colors";

import { api } from "../services/api";

import { AddableProduct } from "../components/ItemProduct/Index";
import { CounterInput } from "../components/Input/Index";
import { H2, Text } from "../components/Typografy/Index";
import { LabelButton } from "../components/Button/Index";

import { useProduct } from "../contexts/ProductContext";

export const SearchProduct: React.FC = () => {
  const [productList, setProductList] = useState([{}]);
  const { modalIsActive, handleModal, currentProduct, addProductToStorage } =
    useProduct();
  const modalizeRef = useRef<Modalize>(null);

  async function loadDatas(){    
    await api.get(`products`)
      .then(response=>{
        setProductList(response.data)
      })
      .catch(e=>console.log(e))
  }

  useEffect(()=>{
    loadDatas()
  },[])
  
  function showToast() {
    if (Platform.OS === 'android') {
      ToastAndroid.show("Adicionado!", ToastAndroid.SHORT);
    } else {
      Alert.alert('Adicionado');
    }
  }

  function handleOpenRefModal() {
    modalizeRef.current?.open();
  }

  function handleCloseRefModal() {
    modalizeRef.current?.close();
  }

  useEffect(() => {
    if (modalIsActive === true) {
      handleOpenRefModal();
    } else {
      handleCloseRefModal();
    }
  }, [modalIsActive]);

  return (
    <>
      <SafeAreaView style={styles.container}>        

        <View style={styles.inner}>
          <ScrollView
            contentContainerStyle={{ width: "100%", paddingBottom: 130 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.title}>
              <H2>Principais resultados </H2>
              <Text.Subtitle>
                Selecione o produto que deseja comprar!
              </Text.Subtitle>
            </View>

            <View style={styles.contentList}>
              {productList.map((element: any, index) => {
                return (
                  <Pressable key={index} >
                    <AddableProduct
                      id={index + 1}
                      style={styles.product}
                      title={element.title}
                      productImage={element.image}
                      quantity={1}
                    />
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <Modalize
        adjustToContentHeight
        ref={modalizeRef}
        onClose={() => handleModal(true)}
      >
        <View style={modalStyles.container}>
          <View style={modalStyles.center}>
            <View style={modalStyles.flexRow}>
              <Image
                style={modalStyles.productImage}
                source={{
                  uri: currentProduct.productImage,
                }}
              />

              <View>
                <H2 style={modalStyles.productTitle}>{currentProduct.title}</H2>
                <CounterInput />
              </View>
            </View>

            <View style={modalStyles.actionButton}>
              <LabelButton
                size="medium"
                label="Esquecer"
                style={{ width: "48%", marginRight: 10 }}
                color="secondary"
                onPress={() => {
                  handleModal();
                }}
              />
              <LabelButton
                size="medium"
                label="Adicionar"
                style={{ width: "48%" }}
                onPress={() => {
                  addProductToStorage();
                  handleModal();
                  showToast();
                }}
              />
            </View>
          </View>          
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  inner: {
    flex: 1,
    width: "100%",
  },
  textCentered: {
    textAlign: "center",
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,
  },
  contentList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    maxWidth: 315,
    alignItems: "center",
  },
  product: {
    marginTop: 15,
    justifyContent: "space-between",
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
  },
});

const modalStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  productTitle: {
    lineHeight: 25,
    width: "70%",
    marginBottom: 10,
  },
  actionButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginRight: 10,
  },
  certificationImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  modalContent: {
    marginTop: 15,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "90%",
    height: "90%",
  },
});
