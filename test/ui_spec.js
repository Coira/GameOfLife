import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument,
	 scryRenderedDOMComponentsWithClass,
	 scryRenderedDOMComponentsWithTag,
	 createRenderer,
	 Simulate} from 'react-addons-test-utils';
import App from '../src/components/App';
import Board from '../src/components/BoardContainer';
import Cell from '../src/components/Cell';
import Map from 'immutable';
import {expect} from 'chai';
import {createBoard} from '../src/game/board';


describe('Controls', () => {
    
    const app = renderIntoDocument(<App />);
    const buttons = scryRenderedDOMComponentsWithTag(app, "button");
    const buttonNames = buttons.map((button) => (button.textContent));

    describe('Buttons', () => {
	it.skip('renders 4 control buttons', () => {
	    expect(buttons.length).to.equal(4);
	});
	
	it ('renders a start button', () => {
	    expect(buttonNames).to.contain("Start");
	});

	it ('renders a stop button', () => {
	    expect(buttonNames).to.contain("Stop");
	});

	it ('renders a new board button', () => {
	    expect(buttonNames).to.contain("New Board");
	});

	it.skip('renders a clear board button', () => {
	    expect(buttonNames).to.contain("Clear");
	});
    });

});

describe('BoardContainer', () => {
    
    let board = renderIntoDocument(<Board width={3}
					    height={3}
					    board={createBoard(3,3)}
					    cellClickFtn={null}/>);

    const cells = scryRenderedDOMComponentsWithClass(board, 'cell');
    it ('renders a board with the correct number of cells', () => {
	expect(cells.length).to.equal(9);
    });
    
});
    


