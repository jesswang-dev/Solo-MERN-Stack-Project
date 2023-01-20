import React, {Component} from "react";

class SubmitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="submitContainer">
                <input type="text"></input>
                <button id="savebtn">Save</button>
            </div>
        )
    }
}

export default SubmitContainer;