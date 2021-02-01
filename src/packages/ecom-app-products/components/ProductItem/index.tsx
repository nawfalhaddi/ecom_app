import React from "react";
import { View, Text } from "react-native";
import styled from "../../../../core/ecom-app-interface/theme/styled-components";
import { Product } from "../../data/types";

type Props = {
  product: Product;
  onPress: () => void;
};
const ProductItem = ({ product, onPress }: Props) => {
  return (
    <MainContainer onPress={onPress}>
      <ProductImage source={{ uri: product.image }} />
      <ProductTitle>
        {product?.title.length > 30
          ? product.title.substring(0, 30) + "..."
          : product.title}
      </ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
    </MainContainer>
  );
};

export default ProductItem;

const MainContainer = styled.TouchableOpacity`
  width: 45%;
  margin: 10px 5px;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 125px;
  border-radius: 8px;
`;

const ProductTitle = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.Regular};
  color: ${(props) => props.theme.colors.primary};
`;

const ProductPrice = styled.Text`
  font-size: 17px;
  font-family: ${(props) => props.theme.fonts.Bold};
  color: ${(props) => props.theme.colors.primary};
`;
