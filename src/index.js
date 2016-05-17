import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './redux/store';

import App from './components/App';
import {createBoardAction, tickAction, randomiseAction,
	startAction, stopAction, clearAction, 
	toggleCellStatusAction} from './redux/actions';

import {SMALL_WIDTH as SW, MEDIUM_WIDTH as MW,
	LARGE_WIDTH as LW} from './components/App';

import './style.scss';


const mapStateToProps = (state) => {
    return {
	board: state.get("board"),
	width: state.get("width"),
	height: state.get("height"),
	generation: state.get("generation"),
	running: state.get("running")
	    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onNewBoard: (w,h,living,randomise) => {
	    //dispatch(createBoardAction(6,6,[8,15,19,20,21]));
	    //dispatch(createBoardAction(30,30,[0,9,19,29], false));
	    //dispatch(createBoardAction(30,30,[],true));
	    dispatch(createBoardAction(w,h,living,randomise));
	},
	onSmallBoard: () => {
	    dispatch(createBoardAction(SW, SH, [], true));
	},
	onMediumBoard: () => {
	    dispatch(createBoardAction(MW, MH, [], true));
	},
	onLargeBoard: () => {
	    dispatch(createBoardAction(LW, LH, [], true));
	},
	onStart: () => {
	    dispatch(startAction());
	},
	onStop: () => {
	    dispatch(stopAction());
	},
	onRandomise: () => {
	    dispatch(randomiseAction());
	},
	onClear: () => {
	    dispatch(clearAction());
	},    
	onTick: () => {
	    dispatch(tickAction());
	},
	onCellClick: (cell) => {
	    dispatch(toggleCellStatusAction(cell));
	}
    }
}

export const GameOfLifeApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
	<GameOfLifeApp />
    </Provider>,
    document.getElementById('app')
    
)
    
    
