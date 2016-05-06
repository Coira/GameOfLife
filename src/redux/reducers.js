import {createBoard, updateBoard} from '../game/board';
import {tick} from '../game/core';
import {Map} from 'immutable';

// export function createBoard(width, height, alive = []) {
// export function tick(board, width, generation=0) {

export default function reducer(state = Map(), action) {
    switch(action.type) {
	case 'CREATE_BOARD':
	    const board = createBoard(action.width, action.height,
				      action.liveCells);
	    return Map({board: board, width:action.width, height:action.height,
			generation: 0, running: false});
	case 'START':
	    return state.set('running', true);
	case 'STOP':
	    return state.set('running', false);
	case 'TICK':
	    const nextState = tick(state.get('board'), state.get('width'));
	    return state.withMutations(map => {
		map.set('board', nextState.board)
		   .set('generation',nextState.generation)
	    });
	case 'TOGGLE_CELL_STATUS':
	    const newBoard =  updateBoard(state.get('board'), [action.cell]);
	    return state.set('board', newBoard);
	default:
	    return state;
    }
}

    
