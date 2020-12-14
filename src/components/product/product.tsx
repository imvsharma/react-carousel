import React from 'react';
import {ProductProps} from '../../interface/product.interface';
import {ProductWrapper,ProductImage, ProductInfoContainer,ProductInfo,ProductName,ProductPrice,ProductCategory } from '../style/style';

const Product = ({imgsrc,productname,productprice,category}:ProductProps) => (
    <ProductWrapper>
      <ProductImage alt="product" src={process.env.PUBLIC_URL + imgsrc}></ProductImage>
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{productname}</ProductName>
          <ProductPrice>{productprice}</ProductPrice>
        </ProductInfo>
        <ProductCategory>{category}</ProductCategory>
      </ProductInfoContainer>
    </ProductWrapper>
)

export default Product;