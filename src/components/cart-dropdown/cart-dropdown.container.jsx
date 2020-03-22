import React, { Component } from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CartDropdown from "./cart-dropdown.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";


class CartDropdownContainer extends Component{
    render(){
        const { cartItems } = this.props;
        return(
            <CartDropdown cartItems={cartItems} history dispatch />
        )
    }   
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdownContainer));
   
