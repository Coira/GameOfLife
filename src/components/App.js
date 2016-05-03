import React from 'react';
import Board from './BoardContainer';
import Controls from './Controls';

class App extends React.Component {
    constructor(props) {
	super(props);
	this.timer = null;
    }

    startFtn() {
	console.log('start');
	if (!this.timer) {
	    this.tick();
	}
    }

    stopFtn() {
	clearTimeout(this.timer);
    }

    tick() {
	this.timer = setTimeout(function() {
	    this.props.onTick();
	    window.requestAnimationFrame(this.tick.bind(this));
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
		       board={this.props.board}/>
	    </div>
	)
    }
}

export default App;

