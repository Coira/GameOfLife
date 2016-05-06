import {expect} from 'chai';
import {Map, fromJS} from 'immutable';
import reducer from '../src/redux/reducers';
import {createBoard} from '../src/game/board';

describe('reducer', () => {
    it ('handles CREATE_BOARD', () => {
	const initialState = Map();
	const action = {type: 'CREATE_BOARD',
			width: 3, height: 3,
			liveCells: [0,2,4,6,8]}
	const nextState = reducer(initialState, action);
	expect(nextState).to.equal(fromJS({
	    board: [{pos:0, alive:true}, {pos:1, alive:false}, {pos:2, alive:true},
		    {pos:3, alive:false}, {pos:4, alive:true}, {pos:5, alive:false},
		    {pos:6, alive:true}, {pos:7, alive:false}, {pos:8, alive:true}],
	    width: 3, height: 3, generation: 0, running: false}));	
    });
    it ('handles TICK', () => {
	const initialState = Map({
	    board: createBoard(6,6,[8,15,19,20,21]), // glider pattern
	    width: 6, generation: 0, running: false});
	
	const expectedNext = Map({
	    board: createBoard(6,6,[13,15,20,21,26]), // glider gen 2
	    width: 6, generation: 1, running: false});

	const action = {type: 'TICK'};
	const nextState = reducer(initialState, action);
	expect(nextState).to.equal(expectedNext);
	
    });
    it ('handles START and STOP', () => {
	const initialState = Map({board: createBoard(3,3),
				  width: 3, generation: 0,
				  running: false});
	const startAction = {type: 'START'};
	const startedState = reducer(initialState, startAction);
	expect(startedState.get('running')).to.equal(true);

	const stopAction = {type: 'STOP'};
	const stoppedState = reducer(startedState, stopAction);
	expect(stoppedState.get('running')).to.equal(false);
    });
    it ('handles TOGGLE_CELL_STATUS', () => {
	const initialState = Map({board: createBoard(3,3),
				  width: 3, generation: 0,
				  running: false});
	
	const expectedBoard = createBoard(3,3,[1]);

						      
	const action = {type: 'TOGGLE_CELL_STATUS', cell: 1}
	const nextState = reducer(initialState, action);
	
	expect(nextState.get('board')).to.equal(expectedBoard);
    });
	
	
	
	
});
    
