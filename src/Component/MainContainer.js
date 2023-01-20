import React, {Component} from "react";
import { useState } from "react";

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: 3,
            items: ['Coding', 'Eating', 'Sleeping']
        }
    }

    render() {
        const lists = [];
        for(let i = 0; i < this.state.totalItems; i++) {
            lists.push(<Item key={i} text={this.state.items[i]}/>);
          }
        
        return (
            <div id="MainContainer">
                {lists}
            </div>
        )
    }
}

  const Item = props => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrap">
            <input type='checkbox' check ={isChecked.toString()} onChange={() => setIsChecked((prev) => !prev)}></input>
            <span>{props.text}</span>
            <span>[{isChecked ? "Selected" : "Unchecked"}]</span>
        </div>
    )
    }

export default MainContainer;