import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = (props) =>{
  console.log(props);
  return(
    <div>
        <h1>Hats page</h1>
  </div>
  )
}  

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
        
      </Switch>
    </div>
  );
}

export default App;
