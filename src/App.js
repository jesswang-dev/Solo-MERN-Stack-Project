import React, {Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        Habit Tracker: 
        <div className="Habit">
          <input type="checkbox" id="habit" name="habit" 
        value="Reading" />
        Reading
      </div>
      </div>
    );
  }
}

export default App;