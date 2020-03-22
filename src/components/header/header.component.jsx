import React from "react";
// import "./header.styles.scss"; //not used now becaues of styled-components 

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, LinkContainer, OptionsContainer, LinkOption } from "./header.styles";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LinkContainer to= "/" >       
            <Logo className="logo" to= "/" />        
        </LinkContainer>
        <OptionsContainer>
            <LinkOption to="/shop">SHOP</LinkOption>
            <LinkOption className="option" to ="/shop">CONTACT</LinkOption>
            {
            currentUser ? 
            
            <div onClick={()=>auth.signOut()}>SIGN OUT</div> :

            // <LinkOption as div onClick={()=>auth.signOut()}>SIGN OUT</LinkOption> :
            <LinkOption className="option" to="/signin">SIGN IN</LinkOption>

            }
            <CartIcon />  
        </OptionsContainer>     
        { hidden ? null : <CartDropdownContainer /> }
                 
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);