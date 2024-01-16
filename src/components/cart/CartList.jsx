import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartListWrap } from "./CartStyle";
import { useNavigate } from "react-router-dom";
import { allCheck, allRemoveCart, removeSelectCart} from "../../store/modules/cartSlice";
import { useState } from "react";

const CartList = () => {
    const {cartTotal,carts,chkCart} = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let totalPrice = cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    let [allCheckState,setAllCheck] = useState(true)

    let allChecking = () => {
        setAllCheck(!allCheckState)
        dispatch(allCheck(allCheckState))
    }
    
    return (
        <CartListWrap>
            <h2>Cart</h2>
            <p>
            <input type="checkbox" checked={allCheckState} onChange={allChecking}/>
            <label htmlFor="">ALL</label>
            </p>
            <div className="cart-list">
              {carts.map(item => <CartItem key={item.id}item={item}/>)}  
            </div>
            <div className="cart-bottom">
                <p><strong></strong>
                   <span>Total product : {chkCart.length}EA</span> 
                </p>                
                <p><strong></strong>
                   <span>Total Price : {totalPrice}$</span> 
                </p>
            </div>
            <button onClick={()=>navigate(`/product`)}>쇼핑하러가기</button>
            <button onClick={()=>dispatch(allRemoveCart())}>전체삭제</button>
            <button onClick={()=>dispatch(removeSelectCart())}>선택삭제</button>
        </CartListWrap>
    );
};

export default CartList;