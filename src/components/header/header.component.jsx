import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";


const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container">       
            <Logo className="logo" to= "/" />        
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to ="/shop">CONTACT</Link>
            {
            currentUser ? 
            <div>SIGN OUT</div> :
            <Link className="option" to="/signin">SIGN IN</Link>

            }
        </div>        
    </div>
)

export default Header;