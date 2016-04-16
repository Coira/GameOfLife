import React from 'react';
import Cell from './cell';

class Board extends React.Component {
    constructor(props) {
	super(props);
    }

    renderRow(row,i) {
	//console.log(i, i*this.props.width);
	return (
	    <tr key={"tr" + i*this.props.width}>
		{
		    row.map((cell, j) => (
			<td key={i*this.props.width+j}>
			    <Cell
				id={i*this.props.width+j}
				status={cell} />
			</td>)
		    )
		}
	    </tr>
	)
	    
    }
    
    render() {
	let rows = [];

	const boardSize = this.props.height*this.props.width;
	for (let i = 0; i < boardSize; i+=this.props.width) {
	    rows.push(this.props.cells.slice(i, i+this.props.width));
	}
	return (
	    <div className="board">
		<table>
		    <tbody>
			{
			    rows.map((row, i) => (this.renderRow(row, i)))
			}
		    </tbody>
		</table>
	    </div>
	)
    }

}

Board.propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    cells: React.PropTypes.array.isRequired
}


export default Board;

