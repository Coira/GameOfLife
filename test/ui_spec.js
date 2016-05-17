import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument,
	 scryRenderedDOMComponentsWithClass,
	 scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';

import App from '../src/components/App';
import Board from '../src/components/BoardContainer';
import {createBoard} from '../src/game/board';

import {expect} from 'chai';

describe('Controls', () => {
   
    const app = renderIntoDocument(<App />);
    const buttons = scryRenderedDOMComponentsWithTag(app, "button");
    const buttonNames = buttons.map((button) => (button.textContent));
    console.log(buttons);
    describe('Buttons', () => {
	it ('renders a start button', () => {
	    expect(buttonNames).to.contain("Start");
	});

	it ('renders a stop button', () => {
	    expect(buttonNames).to.contain("Stop");
	});

	it ('renders a clear button', () => {
	    expect(buttonNames).to.contain("Clear");
	});

	it ('renders a randomise button', () => {
	    expect(buttonNames).to.contain("Randomise");
	});

	it('renders a clear board button', () => {
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
   


