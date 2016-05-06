import React from 'react';
import Cell from './cell';

class Board extends React.Component {
    constructor(props) {
	super(props);
    }

    renderRow(row,i) {	
	return (
	    <tr key={"tr" + i*this.props.width}>
		{
		    row.map((cell, j) => {
			console.log(i*this.props.width+j);
			return (<td key={i*this.props.width+j}>
			    <Cell
				id={cell.get("pos")}
				status={cell.get("alive")}
				cellClickFtn={this.props.cellClickFtn} />
			</td>);
		    })
		}
	    </tr>
	)
	    
    }
    
    render() {
	let rows = [];
	const width = this.props.width;
	const board = this.props.board;

	for (let i = 0; i < parseInt(this.props.height); i++) {
	    rows.push(board.slice(i*width, i*width+width));
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

/*
Board.propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    cells: React.PropTypes.array.isRequired
}
*/

export default Board;

