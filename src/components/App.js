import React from 'react';
import Board from './BoardContainer';
import Controls from './Controls';

class App extends React.Component {
    constructor(props) {
	super(props);
	this.timer = null;	
    }

    startFtn() {
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
		requestAnimationFrame(this.tick.bind(this));
	    }
	}.bind(this), 100);
    }

    render() {
	return (
	    <div>
		<Controls newBoardFtn={this.props.onNewBoard}			  
			  startFtn={this.startFtn.bind(this)}
			  stopFtn={this.stopFtn.bind(this)}/>
		
		<Board width={this.props.width}
		       height={this.props.height}
		       board={this.props.board}
		       cellClickFtn={this.cellClickFtn.bind(this)}/>
	    </div>
	)
    }
}

export default App;

