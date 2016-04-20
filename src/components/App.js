import React from 'react';
import Board from './Board';
import Controls from './Controls';

class App extends React.Component {
    constructor(props) {
	super(props);

	const width = 10;
	const height = 10;
	
	let cells = [];
	for (var i = 0; i < width*height; i++) {
	    cells.push(false);
	}

	for (var i = 0; i < width*height; i+=500) {
	    cells[i] = true;

	}

	this.state = {
	    width,
	    height,
	    cells
	}
	
	    
    }

    startFtn() {
	console.log("start clicked");
    }

    stopFtn() {
	console.log("stop clicked");
    }

    render() {
	return (
	    <div>
		App
		<Controls startFtn={this.startFtn.bind(this)}
			  stopFtn={this.stopFtn.bind(this)}/>
		<Board width={this.state.width}
		       height={this.state.height}
		       cells={this.state.cells}/>
	    </div>
	)
    }
}

export default App;
