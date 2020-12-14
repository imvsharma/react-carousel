import React, {useState, useEffect} from 'react';
import './App.css';
import CarouselContainer from './components/carousel-container/carousel-container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import CategoryFilter from './components/category-filter/category-filter';

library.add(faCaretRight, faCaretLeft);



function App() {
  const [products,setProducts]=useState([]);
  const [category,setCategory]=useState([]);
    const getProducts=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        ).then( response => response.json())
          .then(jsonData => {
            setCategory(jsonData);
            setProducts(jsonData[0].products);
          });
      }

    useEffect(() => {
        if(products.length === 0) {
            getProducts();
        } 
    },[products])

    const handleSelectCategory = (selectCategory:any) => {
      category.forEach((item:any) => {
        if(item.category === selectCategory) setProducts(item.products)
      })
    }


  return (
    <div className="App">
      {category && category.length>0 && <CategoryFilter onSelectCategory={handleSelectCategory} categoryList={category} />}
      {products && products.length>0 &&<CarouselContainer data={products} />}
    </div>
  );
}

export default App;
