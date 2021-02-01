import React from "react";
import _ from "lodash";
import EmptyScreen from "../../../../core/ecom-app-interface/components/EmptyScreen";
import { FlatList, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import Loader from "../../../../core/ecom-app-interface/components/Loader";
import { StackHeaderProps } from "@react-navigation/stack";
import Routes from "../../../../core/ecom-app-navigation/Routes";
import useGetProducts from "./hooks/useGetProducts";

const Products = ({ navigation }: StackHeaderProps) => {
  const { isLoading, data, error } = useGetProducts();

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <EmptyScreen />;
  }
  return (
    <FlatList
      extraData={data}
      data={data ? data : []}
      contentContainerStyle={{ paddingBottom: 100 }}
      numColumns={2}
      columnWrapperStyle={{ alignItems: "center", alignSelf: "center" }}
      refreshing={isLoading}
      renderItem={({ item }) => {
        return (
          <ProductItem
            key={item.id}
            product={item}
            onPress={() => {
              navigation.navigate(Routes.ProductDetails, {
                product: item,
              });
            }}
          />
        );
      }}
    />
  );
};

export default Products;
