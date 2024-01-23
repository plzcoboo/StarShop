import React, { useEffect, useRef, useState } from 'react';
import { ProductSearchWrap } from './ProductStyle';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';

const ProductSearch = ({NewProductData,SetNewProductData}) => {
    const [text, setText] = useState('')
    const [category, setCategory] = useState('')
    let {products} = useSelector(state => state.cart)
    const textRef = useRef()
    const onSort = (e) => {
        e.preventDefault();
        const {value} = e.target;
        setCategory(value)
    }

    useEffect(()=>{
        if(category !== '') {
            let newProduct = NewProductData.sort((a,b) => a[category] > b[category] ? 1 : -1)
            SetNewProductData([...newProduct])
        }
    },[category])
    
    const changeInput = e => {
        const {value} = e.target
        setText(value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(text === '') {SetNewProductData(products)}
        textRef.current.focus()
        if(text) {
            SetNewProductData(products.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))) 
        }
    }

    let onReset = () => {
        SetNewProductData([...products]);
    }
  
    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <input type="text" value={text} onChange={changeInput} ref={textRef}/>
                <button type='submit'>Search</button>    
                </p>
               <p>
               <select onChange={onSort}>
                    <option value="">상품 정렬</option>
                    <option value="title">제품명</option>
                    <option value="price">가격</option>
                    <option value="category">카테고리</option>
                </select>
                <span onClick={onReset}>Reset</span>
               </p>
            </form>
            
        </ProductSearchWrap>
    );
};

export default ProductSearch;