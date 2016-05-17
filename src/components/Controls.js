import React from 'react';

const Controls = ({smallBoardFtn, mediumBoardFtn, largeBoardFtn,
		   startFtn, stopFtn, clearFtn, randomiseFtn}) => (
		       
    <div className="controls">
	<div className="board_op sections">
	    Controls
	    <div className="buttons">
		<button onClick={startFtn}>Start</button>
		<button onClick={stopFtn}>Stop</button>
		<button onClick={clearFtn}>Clear</button>
		<button onClick={randomiseFtn}>Randomise</button>
	    </div>
	</div>
	<div className="new_board sections">
	    New Board
	    <div className="buttons">
		<button onClick={smallBoardFtn}>
		    Small
		</button>
		<button  onClick={mediumBoardFtn}>
		    Medium
		</button>
		<button  onClick={largeBoardFtn}>
		    Large
		</button>
	    </div>
	</div>
	<div className="patterns sections">
	    Patterns
	    <div>
		<div className="buttons">
		    <button>Glider</button>
		    <button>Pattern1</button>
		    <button>Pattern2</button>
		    <button>Pattern3</button>
		</div>
	    </div>
	</div>
    </div>
);


/*
   Controls.propTypes = {
   startFtn: React.PropTypes.func.isRequired,
   stopFtn: React.PropTypes.func.isRequired
   }
 */
export default Controls;
