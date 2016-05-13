import React from 'react';
import Cell from './cell';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {SMALL_WIDTH as SW, MEDIUM_WIDTH as MW,
	LARGE_WIDTH as LW} from '../index';
    
const boardDefault = [];

class Board extends React.Component {
    
    constructor(props) {
	super(props);
	this.shouldComponentUpdate =
	PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
	// prevent trying to map over 'undefined'
	const board = this.props.board || boardDefault;
	let size = null;

	// cell size. A small board will have a larger cell.
	if (this.props.width === SW) size = "small";
	else if (this.props.width === MW) size = "medium";
	else if (this.props.width === LW) size = "large";

	return (
	    <div className="board">
		{
		    board.map((cell, i) => (
			<Cell className="cell"
			      key={i}
			      id = {i}
			      cell={cell}
			      cellClickFtn={this.props.cellClickFtn}
			      size={size}/>
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

