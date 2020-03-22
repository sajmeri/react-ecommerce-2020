import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import  CartIcon  from "./cart-icon.component";

class CartIconContainer extends Component{
    render(){
        const { toggleCartHidden, itemCount } = this.props;
        return (            
            <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIconContainer);