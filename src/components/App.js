import React from 'react';
import Board from './BoardContainer';
import Controls from './Controls';

class App extends React.Component {
    constructor(props) {
	super(props);	    
    }

    startFtn() {
	console.log('start');
    }

    stopFtn() {
	console.log('stop');
    }
    

    render() {
	return (
	    <div>
		<Controls startFtn={this.props.onStart}
			  stopFtn={this.stopFtn.bind(this)}/>
		
		<Board width={this.props.width}
		       height={this.props.height}
		       board={this.props.board}/>
	    </div>
	)
    }
}

export default App;

