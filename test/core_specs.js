import {expect} from 'chai';
import {createBoard, getNeighbours} from '../src/game/board';
import {countLive, applyRules, tick} from '../src/game/core';

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
	expect(countLive(createBoard(3,4))).to.equal(0);

	// get cell 0 from board and counts its live neighbours
	const nbs = getNeighbours(board,0,w);
	expect(nbs.size).to.equal(8);
	expect(countLive(nbs)).to.equal(8);
	
    });


    // helper function for testing applyRules
    function createMinimalBoard(liveCells=[]) {
	const board = createBoard(3,3,liveCells);
	const neighbours = getNeighbours(board, 4, 3);
	const cell = board.get(4);

	return [cell, neighbours];
    }
    
    // applyrules returns true if the cell should end up alive
    // and false if the cell should end up dead
    it ('kills a live cell if it has < 2 live neighbours', () => {
	let [cell, neighbours] = createMinimalBoard([0])  
	expect(applyRules(cell, neighbours)).to.equal(false);

	[cell, neighbours] = createMinimalBoard();
	expect(applyRules(cell, neighbours)).to.equal(false);
    });

    it ('keeps alive a live cell if it has 2 or 3 live neighbours', () => {
	// this cell is dead with 2 neighbours, should stay dead
	let [cell, neighbours] = createMinimalBoard([3,2]);
	expect(applyRules(cell, neighbours)).to.equal(false);

	// alive with 2 neighbours, should stay alive
	[cell, neighbours] = createMinimalBoard([3,2,4]);
	expect(applyRules(cell, neighbours)).to.equal(true);

	// alive with 3 neighbours, should stay alive
	[cell, neighbours] = createMinimalBoard([5,4,1,8]);
	expect(applyRules(cell, neighbours)).to.equal(true);
    });
    
    it ('resurrects a dead cell if it has exactly 3 live neighbours', () => {
	// dead with 3 neighbours, resurrected
	let [cell, neighbours] = createMinimalBoard([7,2,6]);
	expect(applyRules(cell, neighbours)).to.equal(true);
    });
    
    it ('kills a live cell if it has > 3 live neighbours', () => {
	// dead with > 3 neighbours, stays dead
	let [cell, neighbours] = createMinimalBoard([2,7,1,8]);
	expect(applyRules(cell, neighbours)).to.equal(false);
	
	// alive with > 3 neighbours, killed
	[cell, neighbours] = createMinimalBoard([4,5,6,7,8]);
	expect(applyRules(cell, neighbours)).to.equal(false);
    });


});

describe('game tick actions', () => {

    /* our test boards
       
       Glider  --  repeats after 4 generations
       x 0 1 2 3 4 5   
       0 0 0 0 0 0 0   
       1 0 0 1 0 0 0   
       2 0 0 0 1 0 0  
       3 0 1 1 1 0 0   
       4 0 0 0 0 0 0   
       5 0 0 0 0 0 0  

     */

    let glider = createBoard(6,6,[8,15,19,20,21,22]);
    
    it ('identifies all the living cells after a game tick', () => {
	let boardStates = [];

    });

    it ('keeps track of number of generations',  () => {
    });

    it ('stops when all cells are dead', () => {
    });
    
});


    
