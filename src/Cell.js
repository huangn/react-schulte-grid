import React from 'react';
import './App.css';

class Cell extends React.Component {
    constructor(props){
        super(props);
        this.content = props.content;
        this.isCleared = false;
    }

    render() {
        return(
            <button className="square"
                    onClick={this.props.onClick}>
                {this.content}
            </button>
        );
    }
}

export default Cell;