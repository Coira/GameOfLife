import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import {createBoardAction, tickAction} from './redux/actions';
import './style.scss';

const mapStateToProps = (state) => {
    return {
	board: state.get("board"),
	width: state.get("width"),
	height: state.get("height"),
	generation: state.get("generation")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onNewBoard: () => {
	    dispatch(createBoardAction(6,6,[8,15,19,20,21]));
	},
	onStart: () => {
	    dispatch(startGameAction())
	},
	onTick: () => {
	    dispatch(tickAction());
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
    
    
