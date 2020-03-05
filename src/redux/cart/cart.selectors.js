import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const selectCartItems = createSelector(
    [cartSelector],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [cartSelector],
    cart => cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedTotal, cartItem)=> accumulatedTotal + (cartItem.quantity * cartItem.price), 0)
)