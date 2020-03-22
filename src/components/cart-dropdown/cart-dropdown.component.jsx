import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../../components/cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            
            {
               cartItems.length ? (
                   cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
               ) :
               (
                   <span className="empty-message">Your cart is empty.</span>
               )
            }
        </div>
        <CustomButton onClick = {()=>{ 
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>Go to Checkout</CustomButton>
    </div>
)

export default CartDropdown;