import React, { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './App.css';

import Homepage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import CheckoutPage from "./pages/checkout/checkoutpage.component";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
  
  unsubscribeFromAuth = null; //initialing this as null

  componentDidMount(){
    //storing the auth state changed in the variable unsubscribe from auth
    //so that it could also be triggered from componentWillUnmount
    //which in turn will update the state of the currentUser as null
    // to avoid the memory leak
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()            
          })
        })
        
      }
      setCurrentUser(
        userAuth
     ) 
      
    })
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=>currentUser ? (<Redirect to ="/" />) : (<SignInAndSignUpPage />) }  />        
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
