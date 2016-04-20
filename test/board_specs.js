import {expect} from 'chai';
import {createBoard, getNorthNeighbour,
	getSouthNeighbour, getWestNeighbour,
	getEastNeighbour} from '../src/game/board';
import {getNorthWestNeighbour as getNW_Neighbour,
	getSouthWestNeighbour as getSW_Neighbour,
	getNorthEastNeighbour as getNE_Neighbour,
	getSouthEastNeighbour as getSE_Neighbour} from '../src/game/board';

describe('board logic', () => {

    describe('board creation', () => {
	const w = 3;
	const h = 5;
	it ('it contains (width*height) number of cells',() => {
	    expect(createBoard(w,h)).to.have.size(w*h);
	});
	it ('deals with negative width & height correctly', () => {	    
	    expect(createBoard(-1,3)).to.have.size(0);
	    expect(createBoard(3,-1)).to.have.size(0);
	});
	it ('sets cells as dead as default', () => {
	    expect(createBoard(w,h).count(v => v.get("alive"))).to.equal(0);
	});
	it ('sets cells as alive correctly', () => {
	    let board = createBoard(w,h,[1,2,3]);
	    expect(board.count(v =>v.get("alive"))).to.equal(3);

	    board = createBoard(w,h,[-1]);
	    expect(board.count(v => v.get("alive"))).to.equal(0);

	    board = createBoard(w,h,[w*h]);
	    expect(board.count(v => v.get("alive"))).to.equal(0);

	    board = createBoard(-3, 3, [1,2,3]);
	    expect(board.count(v => v.get("alive"))).to.equal(0);

	    board = createBoard(2,0, [1,2,3]);
	    expect(board.count(v => v.get("alive"))).to.equal(0);
	    
	});
    });
    
    describe('cell neighbour retrieval', () => {
	const w = 4;
	const h = 3;
	const board = createBoard(w,h);
	it ('gets the correct neighbours', () => {
	    // chai-immutable equality sanity checks
	    expect(board.get(1)).to.equal(board.get(1));
	    expect(board.get(1)).to.not.equal(board.get(2));

	    /* cell layout of board width = 4, height = 3
	       0  1  2   3
	       4  5  6   7
               8  9  10  11
	       
	       If we check the neighbours of cell 5 then we expect that:
	       cell 1 is north of cell 5
	       cell 9 is south of cell 5
	       Etc
	     */
	    
	    const neighbours = {"north": 1, "south": 9, "west": 4, "east":6,
				"nw": 0, "ne": 2, "sw": 8, "se": 10 }
	    const funcs = {"north":getNorthNeighbour, "south": getSouthNeighbour,
			   "west":getWestNeighbour, "east": getEastNeighbour,
			   "nw": getNW_Neighbour, "ne": getNE_Neighbour,
			   "sw": getSW_Neighbour, "se": getSE_Neighbour}

	    Object.keys(funcs).map((direction) => {
		const neighbour = board.get(neighbours[direction]);
		const getNeighbour = funcs[direction];
		expect(getNeighbour(board, 5, w)).to.equal(neighbour);
		expect(getNeighbour(board, board.get(5), w)).to.equal(neighbour);
	    });
	});
    });

    describe('out of bounds neighbours', () => {
    });
});
