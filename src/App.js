import React, {Component} from "react";
import "./App.css";
import MainContainer from './Component/MainContainer';
import SubmitContainer from "./Component/SubmitContainer";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Habit Tracker</h1>
        <MainContainer />
        <SubmitContainer />
      </div>
    );
  }
}

export default App;