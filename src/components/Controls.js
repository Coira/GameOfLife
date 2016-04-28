import React from 'react';

    
const Controls = ({startFtn, stopFtn}) => (
    <div className="controls">
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
    
