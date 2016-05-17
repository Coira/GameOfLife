import {createBoard, updateBoard, clearBoard,
	randomiseBoard} from '../game/board';
import {tick} from '../game/core';
import {Map, fromJS} from 'immutable';


export default function reducer(state = fromJS({board: []}), action) {
    switch(action.type) {
	case 'CREATE_BOARD':
	    const board = createBoard(action.width, action.height,
				      action.liveCells, action.random);
	    return Map({board: board, width:action.width, height:action.height,
			generation: 0, running: false});
	case 'START':
	    return state.set('running', true);
	case 'STOP':
	    return state.set('running', false);
	case 'CLEAR':
	    return state.withMutations(map => {
		map.set('board', clearBoard(state.get('board')))
		   .set('running', false);
	    });		
	case 'RANDOMISE':
	    return state.withMutations(map => {
		map.set('board', randomiseBoard(state.get('board')))
		   .set('running', false);
	    });
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

