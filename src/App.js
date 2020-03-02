import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";

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

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />        
        </Switch>
      </div>
    );
  }
  
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
