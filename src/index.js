import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import {createBoardAction, tickAction,
	startAction, stopAction,
	toggleCellStatusAction} from './redux/actions';
import './style.scss';

export const SMALL_WIDTH = 30;
export const SMALL_HEIGHT = 30;
export const MEDIUM_WIDTH = 60;
export const MEDIUM_HEIGHT = 60;
export const LARGE_WIDTH = 100;
export const LARGE_HEIGHT = 100;


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
	onStart: () => {
	    dispatch(startAction());
	},
	onStop: () => {
	    dispatch(stopAction());
	},
	onTick: () => {
	    dispatch(tickAction());
	},
	onCellClick: (cell) => {
	    dispatch(toggleCellStatusAction(cell));
	}
    }
}

const GameOfLifeApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
	<GameOfLifeApp />
    </Provider>,
    document.getElementById('app')
    
)
    
    
