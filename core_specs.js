import {expect} from 'chai';
import {createBoard, getNeighbours} from '../src/game/board';
import {countLive} from '../src/game/core';

describe('rules logic', () => {
    
    /* our test board 0: dead, 1: live
       1 1 0 0 1        
       1 1 0 0 1 
       0 0 0 0 0
       1 1 0 0 1

       The top left cell is cell 0 (i.e it's in position 0)
       and the bottom right cell is cell 14 (it's in position 14)
     */
    const w = 5;
    const h = 4;
    const board = createBoard(w,h, [0, 1,4,5,6,9,15,16,19]);
    
    it ('counts the number of live cells', () => {
	// no live cells
	//expect(countLive(createBoard(3,4))).to.equal(0);

	// get cell 0 from board and counts its live neighbours
	const nbs = getNeighbours(board,0,w);
	console.log(nbs.map((cell) => (cell.get("pos"))));
	//expect(nbs.size).to.equal(8);
	//expect(countLive(nbs)).to.equal(8);
	
    });

    it ('kills a live cell if it has < 2 live neighbours', () => {
    });

    it ('keeps alive a live cell if it has 2 or 3 live neighbours', () => {
    });

    it ('kills a live cell if it has > 3 live neighbours', () => {
    });

    it ('resurrects a dead cell if it has exactly 3 live neighbours', () => {
    });
});

describe('game tick actions', () => {
    it ('identifies all the living cells after a game tick', () => {
    });

    it ('keeps track of number of generations',  () => {
    });

    it ('stops when all cells are dead', () => {
    });
    
});


    
