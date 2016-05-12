import React from 'react';

import {SMALL_WIDTH as SW, SMALL_HEIGHT as SH,
	MEDIUM_WIDTH as MW, MEDIUM_HEIGHT as MH,
	LARGE_WIDTH as LW, LARGE_HEIGHT as LH} from '../index';

const Controls = ({newBoardFtn, startFtn, stopFtn}) => (
    <div className="controls">
	<div className="board_op sections">
	    Controls
	    <div className="buttons">
		<button onClick={startFtn}>Start</button>
		<button onClick={stopFtn}>Stop</button>
		<button>Clear</button>
		<button>Randomise</button>
	    </div>
	</div>
	<div className="new_board sections">
	    New Board
	    <div className="buttons">
		<button onClick={() => newBoardFtn(SW,SH,[0,10,20,30],false)}>
		    Small
		</button>
		<button  onClick={() => newBoardFtn(MW,MH,[0,10,20,30,40,50, 60],false)}>
		    Medium
		</button>
		<button  onClick={() => newBoardFtn(LW,LH,[0,10,20,30,40,50,60,70,80,90,100],false)}>
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

/*
   <div className="buttons">
   <button onClick={() => newBoardFtn(30,30,[0,10,20,30],false)}>
   Small
   </button>
   <button  onClick={() => newBoardFtn(50,50,[0,10,20,30,40,50],false)}>
   Medium
   </button>
   <button  onClick={() => newBoardFtn(100,100,[0,10,20,30,40,50,60,70,80,90,100],false)}>
   Large
   </button>
 */
