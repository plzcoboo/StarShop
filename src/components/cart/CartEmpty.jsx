import { CartEmptyWrap } from "./CartStyle";


const CartEmpty = () => {
    return (
        <CartEmptyWrap>
            <div className="inner">
            <h2>
            Your bag is empty start shopping now!
            </h2>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;