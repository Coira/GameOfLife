import React from 'react';

    
const Controls = ({newBoardFtn, startFtn, stopFtn}) => (
    <div className="controls">
	<button onClick={newBoardFtn}>New Board</button>
	<button onClick={startFtn}>Start</button>
	<button onClick={stopFtn}>Stop</button>
    </div>
);

/*
Controls.propTypes = {
    startFtn: React.PropTypes.func.isRequired,
    stopFtn: React.PropTypes.func.isRequired
}
*/
export default Controls;
    
