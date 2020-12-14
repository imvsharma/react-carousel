import React from 'react';
import Product from '../product/product';
import { ProductCarouselProps } from '../../interface/productcarousel.interface';
import { ProductCarouselContainer } from '../style/style';

const ProductCarousel = ({data, forwardedRef}:ProductCarouselProps) => (
    <ProductCarouselContainer ref={forwardedRef}>
        {
            data.map((item:any, index:number)=><Product key={index} productname={item.name} productprice={item.price} category={item.category} imgsrc= {item.image} />)
        }
    </ProductCarouselContainer>
        
)

export default ProductCarousel;