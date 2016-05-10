import React from 'react';
import Cell from './cell';
import classnames from 'classnames';

const boardDefault = [];

class Board extends React.Component {
    
    constructor(props) {
	super(props);
    }

    render() {
	// prevent trying to map over 'undefined'
	const board = this.props.board || boardDefault;
	

	return (
	    <div className={classnames("board", "medium")}>
		{
		    board.map((cell, i) => (
			<Cell className="cell"
			      key={i}
			      id = {i}
			      cell={cell}
			      cellClickFtn={this.props.cellClickFtn}/>
		    ))
		}
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

