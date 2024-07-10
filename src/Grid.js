import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.level = props.level;
        this.size = this.level * this.level;
        this.cells = new Array(this.size).fill(0);
        //TODO: initialize the grid.
    }

    handleClick(i){
        //TODO: check the clicked cell contains right content. disable it if yes. otherwise warn.
    }

    render() {
        // return (
        //     <div>
        //         {this.cells.forEach((cell, index) => {
        //             if (index%this.level == 0) {
        //                 const row = index/this.level;
        //                 return (
        //                     <div className="grid-row">
        //                         {this.cells.slice(index, index+this.level-1).forEach((cell, index) => {
        //                             const i = index+this.level*row;
        //                             return (
        //                                 <Cell content={cell}
        //                                     onClick={() => this.handleClick(i)}/>
        //                             );
        //                         })}
        //                     </div>
        //                 );
        //             }
        //         })}
        //     </div>
        // );
        return(
            <div>
                <div className="grid-row">
                {this.cells.forEach((cell, index) => {
                    return <Cell content={cell} onClick={() => this.handleClick(index)}/>;
                })}
                </div>
            </div>
        );
    }
}

export default Grid;