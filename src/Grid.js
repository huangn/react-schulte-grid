import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.level = props.level;
        this.size = this.level * this.level;
        this.cells = new Array();
        //initialize the grid.
        while (this.cells.length < this.size) {
            let randomNumber = Math.floor(Math.random() * this.size) + 1;
            if (!this.cells.includes(randomNumber)) {
                this.cells.push(randomNumber);
            }
        }
    }

    handleClick(i){
        //TODO: check the clicked cell contains right content. disable it if yes. otherwise warn.
    }

    render() {
        const grid = this.cells.map((cell, index) => {
                        if (index%this.level == 0) {
                            const row = index/this.level;
                            return (
                                <div className="grid-row">
                                    {this.cells.slice(index, index+parseInt(this.level)).map((cell, rowIndex) => {
                                        const i = rowIndex+this.level*row;
                                        return (
                                            <Cell content={cell}
                                                onClick={() => this.handleClick(i)}/>
                                        );
                                    })}
                                </div>
                            );
                        }
                    });
        return (
            <div>
                {grid}
            </div>
        );
    }
}

export default Grid;