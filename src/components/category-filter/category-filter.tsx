import React, {useState} from 'react';
import {SelectBox, CategoryFilterWrapper} from '../style/style';

const CategoryFilter = (props:any) => {
    const [selectedcategory, setSelectedCategory] = useState(props.categoryList[0].category);
    const handleLangChange = (e:any) => {
        setSelectedCategory(e.currentTarget.value)
        props.onSelectCategory(e.currentTarget.value);
    }

    return (   
        <CategoryFilterWrapper>
            <span>
                Select Category : 
            </span>
            <SelectBox value={selectedcategory} onChange={handleLangChange}>
                {props.categoryList.map((item:any, index:number) => <option key={index} value={item.category} >{item.category}</option>)}
            </SelectBox>
        </CategoryFilterWrapper>
       
    )
}

export default CategoryFilter;