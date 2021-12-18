import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductItemProps } from "../components/ItemProduct/Add/Index";

interface ProductContextData {
  productList: ProductItemProps[];
  modalIsActive: boolean;
  currentProduct: ProductItemProps;
  firstProductWasAdded: boolean;
  toDeleteProductList: Array<[ProductItemProps, boolean]>;

  handleModal: (closeModal?: boolean) => void;
  setCurrentProduct: (currentProduct: ProductItemProps) => void;
  addProductToStorage: () => void;
  deleteProductById: (id: number) => void;
  updateProductById: (id: number, product: ProductItemProps) => void;
  addInToDeleteProductList: (
    product: ProductItemProps,
    toDelete: boolean
  ) => void;
  setToDeleteProductList: ([]: Array<[ProductItemProps, boolean]>) => void;
}

interface ProductContextProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({} as ProductItemProps);
  const [productList, setProductList] = useState([] as ProductItemProps[]);

  const [firstProductWasAdded, setFirstProductWasAdded] = useState(false);

  const [toDeleteProductList, setToDeleteProductList] = useState(
    [] as Array<[ProductItemProps, boolean]>
  );

  function addInToDeleteProductList(
    product: ProductItemProps,
    toDelete: boolean
  ) {
    setToDeleteProductList([...toDeleteProductList, [product, toDelete]]);
  }

  function handleModal(closeModal?: boolean) {
    if (closeModal === undefined) {
      setModalIsActive(!modalIsActive);
    } else {
      setModalIsActive(false);
    }
  }

  async function setFirstProductWasAddedToStorage() {
    try {
      const firstProduct = Boolean(
        await AsyncStorage.getItem("@firstProductWasAdded")
      );

      if (firstProduct === false || firstProduct === null) {
        await AsyncStorage.setItem("@firstProductWasAdded", "false");
        setFirstProductWasAdded(false);
      } else {
        setFirstProductWasAdded(true);
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function addProductToStorage() {
    try {
      let newCurrentProduct = currentProduct;
      newCurrentProduct.id = productList.length;
      setProductList([...productList, newCurrentProduct]);

      await AsyncStorage.setItem("@firstProductWasAdded", "true");
      setFirstProductWasAdded(true);

      const jsonProduct = JSON.stringify([...productList, newCurrentProduct]);
      await AsyncStorage.setItem("@myProductList", jsonProduct);
    } catch (error) {
      throw new Error();
    }
  }

  async function setProductFromStorageOnState() {
    try {

      setFirstProductWasAddedToStorage();

      const jsonValue = await AsyncStorage.getItem("@myProductList");

      if (jsonValue != null) {
        setProductList(JSON.parse(jsonValue));
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function deleteProductById(id: number) {
    let listWithNewId = [] as ProductItemProps[];

    await setProductFromStorageOnState();

    for (let index = 0; index < productList.length; index++) {
      const element = productList[index] as ProductItemProps;

      if (element.id === id) {
        let newList;

        newList = productList.filter((product: ProductItemProps) => {
          if (product.id != element.id) {
            return product;
          }
        });

        newList.map((newItem: ProductItemProps, index: number) => {
          newItem.id = index;
          listWithNewId.push(newItem);
        });

        break;
      }
    }

    setProductList(listWithNewId);

    const jsonList = JSON.stringify(listWithNewId);
    await AsyncStorage.setItem("@myProductList", jsonList);
  }

  async function updateProductById(id: number, product: ProductItemProps) {
    await setProductFromStorageOnState();

    for (let index = 0; index < productList.length; index++) {
      const element = productList[index] as ProductItemProps;

      if (element.id === id) {
        let newList = [] as ProductItemProps[];

        const updatedProduct: ProductItemProps = {
          id: product.id,
          title: product.title,
          quantity: product.quantity,
          productImage: product.productImage,
        };

        productList.map((productItem: ProductItemProps) => {
          if (productItem.id !== updatedProduct.id) {
            newList.push(productItem);
          } else {
            newList.push(updatedProduct);
          }
        });

        setProductList(newList);

        const jsonList = JSON.stringify(newList);
        await AsyncStorage.setItem("@myProductList", jsonList);

        break;
      }
    }
  }

  useEffect(() => {
    setProductFromStorageOnState();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        modalIsActive,
        handleModal,
        currentProduct,
        setCurrentProduct,
        firstProductWasAdded,
        addProductToStorage,
        productList,
        deleteProductById,
        updateProductById,
        addInToDeleteProductList,
        toDeleteProductList,
        setToDeleteProductList
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
