import { useDispatch, useSelector } from "react-redux";
import { cartsEdit, changeChkState, removeCart, totalCart } from "../../store/modules/cartSlice";
import { useEffect, useState } from "react";
import { LuPlusSquare } from "react-icons/lu";
import { LuMinusSquare } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";



 
const CartItem = ({item,Num}) => {
  const {carts} = useSelector(state => state.cart)
  const {image,price,title,id,ischk} = item
  const dispatch = useDispatch()
  let [count, setCount] = useState(1)

  useEffect(()=>{
   dispatch(totalCart(id))
},[carts])


  let changeChk = () => {
    dispatch(changeChkState({id,ischk}))
    }

  let countingPlus = () => {
    setCount(count + 1)
  }

  let countingMinus = () => {
    if(count === 0) return
    setCount(count - 1)
  }

  let countEdit = () => {
    dispatch(cartsEdit({id,count}))
  }
  
  useEffect(()=>{
    countEdit()
  },[count])

  let cartPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  let divEachPrice = price / count
  let eachPrice = divEachPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <article>
          <p className="cart-select">
            <input type="checkbox" onChange={changeChk} checked={ischk} id={Num}/>
            <label htmlFor={Num}></label>
          </p>
          <div className="product-img">
          <img src={image}  alt={title} />
          </div>
          <div>
            <h3>
              {title}
            </h3>
          </div>
          <p className="cnt">
            <div className="cart-count"><LuPlusSquare onClick={countingPlus}/><span>{count}</span><LuMinusSquare onClick={countingMinus}/></div>
          </p>
          <p>
            <div style={{marginBottom:'10px'}}>Price : {eachPrice}$</div>
            <span style={{fontSize:'24px'}}>Total : {cartPrice}$</span>
          </p>
          <MdOutlineDeleteForever onClick={()=>dispatch(removeCart(id))} className="cart-del">삭제</MdOutlineDeleteForever>        
        </article>
    );
};

export default CartItem;