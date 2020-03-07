import React from "react";
import  StripeCheckout  from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceforStripe = price * 100; //stripe accepts payment in cents
   
    const stripePublisherKey ="pk_test_K6JXehmd3vH29yBnjE9TI8J700xEyKcrQY";
    const onToken = token => {
        console.log(token);
        alert("Payment successful!");
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="React Ecommerce 2020"
            billingaddress
            shippingaddress
            image="http://svgshare.com/i/CUz.svg"
            description={`Your order total $${price}`}
            amount={priceforStripe}
            panelLabel="Pay now"
            token={onToken}
            stripekey={stripePublisherKey}
            />
    )
}

export default StripeCheckoutButton;