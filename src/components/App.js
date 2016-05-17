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
	this.timer = null;
	this.startFtn = this.startFtn.bind(this);
	this.stopFtn = this.stopFtn.bind(this);
	this.cellClickFtn = this.cellClickFtn.bind(this);
	this.tick = this.tick.bind(this);
    }

    startFtn() {
	console.log("started ", this.props.running);
	if (!this.props.running) {
	    this.props.onStart();
	    this.tick();
	}
    }

    stopFtn() {
	this.props.onStop();
	clearTimeout(this.timer);
    }

    cellClickFtn(cell) {
	if (!this.props.running) {
	    this.props.onCellClick(cell);
	}
    }
    
    tick() {
	
	this.timer = setTimeout(function() {
	    if (this.props.running) {
		this.props.onTick();
		requestAnimationFrame(this.tick);
	    }
	}.bind(this), 100);
    }

    render() {
	return (
	    <div>
		<div className="header">Game Of Life and github link</div>

		<div className="game">
		    <Controls smallBoardFtn={this.props.onSmallBoard}
			      mediumBoardFtn={this.props.onMediumBoard}
			      largeBoardFtn={this.props.onLargeBoard}
			      startFtn={this.startFtn}
			      stopFtn={this.stopFtn}
			      clearFtn={this.props.onClear}
			      randomiseFtn={this.props.onRandomise}/>
		    
		    <Board  width={this.props.width}
			    height={this.props.height}
			    board={this.props.board}
			    cellClickFtn={this.cellClickFtn}/>
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
