import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import  StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkoutPage.styles.scss";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>        
        {
            cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            )
           
        }
        <div className="total">
            <span>Total price: ${totalPrice}</span>
        </div>        
        <div className="test-warning">        
            Test credit card:  4242 4242 4242 4244 Exp: 01/20 cvv: 123
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemsTotal
})
export default connect(mapStateToProps)(CheckoutPage);