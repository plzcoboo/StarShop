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
           {/*  <p>
            <input type="checkbox" checked={allCheckState} onChange={allChecking}/>
            <label htmlFor="">ALL</label>
            </p> */}
            <div className="title">
            <h2>Cart</h2>
            <div className="cart-remove">
            <button onClick={()=>dispatch(allRemoveCart())}>Remove all</button>
            <button onClick={()=>dispatch(removeSelectCart())}>Delete</button>
            </div>
            </div>
            <div className="cart-con">
            <div className="cart-list">
                <>{carts.map(item => <CartItem key={item.id} item={item} Num={item.id}/>)}</>
            </div>
            <div className="cart-right">
                <p>
                   <span>total product : {chkCart.length}EA</span> 
                </p>                
                <p>
                   <span>total Price : {totalPrice}$</span> 
                </p>
                <p>
                   <span>discount amount : 0$</span> 
                </p>
                <p>
                   <span>shipping fee : 0$</span> 
                </p>
                <p className="cart-Total">
                   <span>Total</span> 
                </p>
                   <p className="C-T">{totalPrice}$</p> 
                <button>Order</button>
            </div>
            </div>
        </CartListWrap>
    );
};

export default CartList;