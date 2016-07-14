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
	<div className="info_section sections">
	    See the code on my <a href="https://github.com/Coira/GameOfLife" target="_blank">Github repo</a>.
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
