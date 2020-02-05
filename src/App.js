import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: ''
    }
  }
  unsubscribeFromAuth = null; //initialing this as null

  componentDidMount(){
    //storing the auth state changed in the variable unsubscribe from auth
    //so that it could also be triggered from componentWillUnmount
    //which in turn will update the state of the currentUser as null
    // to avoid the memory leak

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})
      console.log(user);
    })
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />        
        </Switch>
      </div>
    );
  }
  
}

export default App;
