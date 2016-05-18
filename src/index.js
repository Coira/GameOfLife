import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import store from './redux/store';
import * as actionCreators from './redux/actions';
import App from './components/App';
//import {createBoardAction, tickAction, randomiseAction,
//	startAction, stopAction, clearAction, 
//	toggleCellStatusAction} from './redux/actions';


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
	actions: bindActionCreators(actionCreators, dispatch)
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
    
    
