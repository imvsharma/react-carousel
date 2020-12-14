import React, {useRef, useEffect} from 'react';
import Indicator from '../indicator/indicator';
import ProductCarousel from '../product-carousel/product-carousel';
import {CarouselProps} from '../../interface/carousel.interface';
import {Container} from '../style/style';

/* const Container = styled.div`
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 600px;
    padding-left: 25px;
    padding-right:25px;
` */

const CarouselContainer = ({data}:CarouselProps) => {
    let childRef = useRef<HTMLDivElement>(null);
    let counter = 0;
    let width:any;
    let products:any;
    useEffect(() => {
        products = childRef.current?.childNodes;
        width = childRef.current?.clientWidth;
        
        if(products.length > 0) {
            products[0].style.transform = 'scale(0.8)';
            Array.from(products).forEach((item:any,index:number) => { 
                if(index !== (counter+1)) {
                    item.style.transform = 'translateX('+((-(width/3)*counter))+'px)';
                    item.style.transform = 'scale(0.8)';
                } else {
                    item.style.transform = 'translateX('+((-(width/3)*counter))+'px)';
                    item.style.transform = 'scale(1.1)';
                } 
            });
        }
    },[])

    
    const handleClick = (dir:any) => {
        products = products = childRef.current?.childNodes;
        width = childRef.current?.clientWidth;
        if(dir === "next") {
            if(counter < products.length -3) {
                counter++;
                Array.from(products).forEach((s:any,i) => {
                  s.style.transition = "transform 0.4s ease-in-out";
                  (counter+1) !== i ? s.style.transform ='translateX('+((-(width/3)*counter))+'px) scale(0.8)' : s.style.transform =' translateX('+((-(width/3)*counter))+'px) scale(1.1)';
                }) 
            }
            
        } else{
            if(counter > 0) {
                counter--;
                Array.from(products).forEach((s:any,i) => {
                s.style.transition = "transform 0.4s ease-in-out";
                (counter+1) !== i ? s.style.transform ='translateX('+((-(width/3)*counter))+'px) scale(0.8)' : s.style.transform =' translateX('+((-(width/3)*counter))+'px) scale(1.1)';
              })
            }
        } 
    }

    return (
        <Container>
            <Indicator id="prev-btn" direction="prev" onclick= {handleClick.bind(null,"prev")}/>
            <Indicator id="next-btn" direction="next" onclick= {handleClick.bind(null,"next")}/>
            <ProductCarousel data={data} forwardedRef={childRef} />
        </Container>
    )
    
}

export default CarouselContainer;