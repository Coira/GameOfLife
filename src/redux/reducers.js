import {createBoard, updateBoard, clearBoard,
	randomiseBoard} from '../game/board';
import {tick} from '../game/core';
import {Map, fromJS} from 'immutable';


export default function reducer(state = fromJS({board: []}), action) {
    switch(action.type) {
	case 'CREATE_BOARD':  // new, randomised board
	    const board = createBoard(action.width, action.height,
				      action.liveCells, action.random);
	    return Map({board: board, width:action.width, height:action.height,
			generation: 0, running: false});
	case 'START': // start board
	    return state.set('running', true);
	case 'STOP':  // stop board
	    return state.set('running', false);
	case 'CLEAR': // clear board, sets all cells as dead
	    return state.withMutations(map => {
		map.set('board', clearBoard(state.get('board')))
		   .set('running', false)
		   .set('generation', 0);
	    });		
	case 'RANDOMISE':  // clears board and randomises it
	    return state.withMutations(map => {
		map.set('board', randomiseBoard(state.get('board')))
		   .set('running', false)
		   .set('generation', 0);
	    });
	case 'TICK': // game tick
	    const nextState = tick(state.get('board'), state.get('width'),
				   state.get('generation'));
	    return state.withMutations(map => {
		map.set('board', nextState.board)
		   .set('generation',nextState.generation)
	    });
	case 'TOGGLE_CELL_STATUS': // toggles cell between alive and dead
	    const newBoard =  updateBoard(state.get('board'), [action.cell]);
	    return state.set('board', newBoard);
	default:
	    return state;
    }
}

