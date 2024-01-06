import { useDispatch, useSelector } from "react-redux";
import { cartsEdit, changeChkState, removeCart, totalCart } from "../../store/modules/cartSlice";
import { useEffect, useState } from "react";

 
const CartItem = ({item}) => {
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

    return (
        <article>
          <p>
            <input type="checkbox" onChange={changeChk} checked={ischk} />
            <label htmlFor=""></label>
          </p>
          <img src={image}  alt={title} />
          <div>
            <h3>
              {title}
            </h3>
          </div>
          <p className="cnt">
            <button onClick={countingMinus}>-</button>
            <button onClick={countingPlus}>+</button>
            <span>{count}</span>
          </p>
          <p>
            <span>Total:{cartPrice}$</span>
          </p>
          <button onClick={()=>dispatch(removeCart(id))}>삭제</button>        
        </article>
    );
};

export default CartItem;