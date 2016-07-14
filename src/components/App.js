import React from 'react';
import Board from './BoardContainer';
import Controls from './Controls';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// default Board sizes
export const SMALL_WIDTH = 50;
export const SMALL_HEIGHT = 30;
export const MEDIUM_WIDTH = 70;
export const MEDIUM_HEIGHT = 50;
export const LARGE_WIDTH = 100;
export const LARGE_HEIGHT = 80;

class App extends React.Component {
    constructor(props) {
	super(props);
	
	this.shouldComponentUpdate =
	PureRenderMixin.shouldComponentUpdate.bind(this);

	this.actions = this.props.actions || [];

	this.timer = null;
	this.startFtn = this.startFtn.bind(this);
	this.stopFtn = this.stopFtn.bind(this);
	this.smallBoardFtn = this.smallBoardFtn.bind(this);
	this.mediumBoardFtn = this.mediumBoardFtn.bind(this);
	this.largeBoardFtn = this.largeBoardFtn.bind(this);
	this.cellClickFtn = this.cellClickFtn.bind(this);
	this.tick = this.tick.bind(this);
    }

    startFtn() {
	console.log("started ", this.props.running);
	if (!this.props.running) {
	    this.actions.start();
	    this.tick();
	}
    }

    stopFtn() {
	this.actions.stop();
	clearTimeout(this.timer);
    }

    smallBoardFtn() {
	this.actions.createBoard(SMALL_WIDTH, SMALL_HEIGHT, [], true);
    }

    mediumBoardFtn() {
	this.actions.createBoard(MEDIUM_WIDTH, MEDIUM_HEIGHT, [], true);
    }

    largeBoardFtn() {
	this.actions.createBoard(LARGE_WIDTH, LARGE_HEIGHT, [], true);
    }
    
    cellClickFtn(cell) {
	if (!this.props.running) {
	    this.actions.toggleCellStatus(cell);
	}
    }
    
    tick() {
	this.timer = setTimeout(function() {
	    if (this.props.running) {
		this.actions.tick();
		requestAnimationFrame(this.tick);
	    }
	}.bind(this), 100);
    }

    render() {
	return (
	    <div className="app_cont">
		<div className="header">Conway's Game Of Life</div>

		<div className="game">
		    <Controls smallBoardFtn={this.smallBoardFtn}
			      mediumBoardFtn={this.mediumBoardFtn}
			      largeBoardFtn={this.largeBoardFtn}
			      startFtn={this.startFtn}
			      stopFtn={this.stopFtn}
			      clearFtn={this.actions.clear}
			      randomiseFtn={this.actions.randomise}/>
		    
		    <Board  width={this.props.width}
			    height={this.props.height}
			    board={this.props.board}
			    cellClickFtn={this.cellClickFtn}/>

		    <div className="info_section_small">
			See the code on my <a href="https://github.com/Coira/GameOfLife" target="_blank">Github repo</a>.
		    </div>
		</div>


		
	    </div>
	)
    }

}

export default App;

/*
<Board width={this.props.width}
       height={this.props.height}
       board={this.props.board}
       cellClickFtn={this.cellClickFtn}/>
*/

