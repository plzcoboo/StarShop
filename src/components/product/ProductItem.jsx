import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, totalCart } from "../../store/modules/cartSlice";
import { useEffect } from "react";

const ProductItem = ({item}) => {
    const {title,price,description,image,id} = item
    const dispatch = useDispatch()
    const {carts} = useSelector(state => state.cart)
    let cartPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    useEffect(()=>{
        dispatch(totalCart())
    },[carts])

    return (
        <article>
             <div className="product-img">
                <img src={image} alt=""  />
             </div>
             <h3>{title}</h3>
             <h4></h4>
             <p> 
                {carts.find(x => x.id === id) ? <button onClick={()=>dispatch(removeCart(id))} className="off"> Cancel </button> : <button onClick={()=>dispatch(addCart(item))}> Order </button>  }
                <span>{cartPrice}$</span>
             </p>
        </article>
    );
};

export default ProductItem;