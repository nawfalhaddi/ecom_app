import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as ProductsActions from "../../../../../core/ecom-app-store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../core/ecom-app-store/types";
import _ from "lodash";
import { Product } from "../../../data/types";

export default function useGetProducts(): {
  isLoading: boolean;
  data: Product[] | undefined;
  error: string | undefined;
} {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const products = useSelector(
    (state: RootState) => state.ProductReducer.products
  );

  useEffect(() => {
    const dispatchFetchProducts = async () => {
      setIsLoading(true);
      try {
        await dispatch(ProductsActions.fetchProducts());
      } catch (error) {
        Alert.alert("Error loading products");
        setError("Error loading products");
      }
      setIsLoading(false);
    };
    dispatchFetchProducts();
  }, []);

  return {
    isLoading: isLoading,
    data: products,
    error: error,
  };
}
