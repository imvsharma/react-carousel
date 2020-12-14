import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 600px;
    padding-left: 25px;
    padding-right:25px;
`
export const SelectBox = styled.select`
    width:150px;
    height:30px;
    font-family: 'OpenSans-Regular';
    font-size: 15px;
`;

export const CategoryFilterWrapper = styled.div`
    margin: 20px;
    font-family: 'OpenSans-Bold';
    font-size: 15px;
`;

export const IndicatorWrapper = styled.div`
    position: absolute;
    top: 50%;
    z-index:90;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    ${({ dir }) => dir === "prev" && `
    left: 15px;
    `}
    ${({ dir }) => dir === "next" && `
    right: 15px;
    `}
`


export const ProductWrapper = styled.div`
  min-width: 28.3%;
  border-radius: 5px;
  margin: 38px;
  position: relative;
  text-align: center;
`;

export const ProductImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
`;

export const ProductInfoContainer = styled.div`
  position:absolute;
  bottom:0;
  right:34px;
  left:34px;
  height:70px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #fff;
  z-index: 100;
  padding: 10px;
  text-align: left
`

export const ProductInfo = styled.div`
  font-weight:bold;
  margin-bottom:15px;
`

export const ProductName = styled.div`
  display: inline-block;
  font-family: 'OpenSans-Bold';
  font-size: 19px;
`

export const ProductPrice = styled.div`
  float: right;
  display: inline-block;
  font-family: 'OpenSans-Bold';
  font-size: 19px;
`

export const ProductCategory = styled.div`
  font-size: 18px;
  font-weight:bold;
  font-family: 'OpenSans-Bold';
  font-size: 16px;
`

export const ProductCarouselContainer = styled.div`
    display: flex;
    height: 93.8%;
    padding-top: 19px;
    padding-bottom: 19px;
    overflow: hidden;
    margin-left: 65px;
    margin-right: 65px;
    text-align:center;
`
