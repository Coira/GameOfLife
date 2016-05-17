import {expect} from 'chai';
import {ALIVE, DEAD, AGED} from '../src/game/board';
import {createBoard, updateBoard, clearBoard, randomiseBoard,
	getNorthNeighbour, getSouthNeighbour, getWestNeighbour,
	getEastNeighbour, getNeighbours} from '../src/game/board';
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
	    //expect(createBoard(w,h).count(v => v.get("alive"))).to.equal(0);
	    expect(createBoard(w,h).count(v => v === DEAD)).to.equal(w*h);
	});
	it ('sets cells as alive correctly', () => {
	    let board = createBoard(w,h,[1,2,3]);
	    expect(board.count(v => (v === ALIVE))).to.equal(3);

	    board = createBoard(w,h,[-1]);
	    expect(board.count(v => v === ALIVE)).to.equal(0);

	    board = createBoard(w,h,[w*h]);
	    expect(board.count(v => v === ALIVE)).to.equal(0);

	    board = createBoard(-3, 3, [1,2,3]);
	    expect(board.count(v => v === ALIVE)).to.equal(0);

	    board = createBoard(2,0, [1,2,3]);
	    expect(board.count(v => v === ALIVE)).to.equal(0);
	    
	});
    });
    
    describe('cell neighbour retrieval', () => {
	const board4x3 = createBoard(4, 3);
	const board5x4 = createBoard(5, 4);

	/*
	   cell layout of board width = 4, height = 3
	   0  1  2   3
	   4  5  6   7
	   8  9  10  11
	   
	   If we check the neighbours of cell 5 then we expect that:
	   cell 1 is north of cell 5
	   cell 9 is south of cell 5
	   Etc
	 */
	
	const funcs = {"north":getNorthNeighbour, "south": getSouthNeighbour,
		       "west":getWestNeighbour, "east": getEastNeighbour,
		       "nw": getNW_Neighbour, "ne": getNE_Neighbour,
		       "sw": getSW_Neighbour, "se": getSE_Neighbour}

	function checkNeighbours(board, width, cellPos, neighbours) {
	    // iterate through all the neighbour retrieval functions
	    Object.keys(funcs).map((direction) => {
		const neighbour = neighbours[direction];
		const getNeighbour = funcs[direction];
		//const position = cell.get("pos");

		//expect(getNeighbour(board, cell, width)).to.equal(neighbour);
		expect(getNeighbour(board, cellPos, width)).to.equal(neighbour);
	    });
	}
	
	it ('gets all neighbours', () => {
	    expect(getNeighbours(board4x3, 5, 4).size).to.equal(8);
	});
	
	it ('gets the correct neighbours', () => {
		
	    // chai-immutable equality sanity checks
	    //expect(board4x3.get(1)).to.equal(board4x3.get(1));
	    //expect(board4x3.get(1)).to.not.equal(board4x3.get(2));
	    
	    // neighbours for cell 5 in board4x3
	    let neighbours = {"north": 1, "south": 9, "west": 4, "east":6,
			      "nw": 0, "ne": 2, "sw": 8, "se": 10 }
	    checkNeighbours(board4x3, 4, 5, neighbours);

	    // neighbours for cell 13 in board5x4
	    neighbours = {"north":8, "south":18, "west":12, "east":14,
			  "nw":7, "ne":9, "sw":17, "se":19}
	    checkNeighbours(board5x4, 5, 13, neighbours);
	    
	});
	
	it ('wraps around the board if cell retrieval is out of bounds', () => {
	    let neighbours = {};
	    
	    // neighbours for cell 0 in board5x4
	    neighbours = {"north": 15, "south": 5, "west": 4, "east": 1,
			  "nw": 19, "ne": 16, "sw": 9, "se": 6}
	    checkNeighbours(board5x4, 5, 0, neighbours);

	    // neighbours for cell 4 in board5x4
	    neighbours = {"north": 19, "south":9, "west":3, "east":0,
			  "nw":18, "ne":15, "sw":8, "se":5}
	    checkNeighbours(board5x4, 5, 4, neighbours);

	    // neighbours for cell 15 in board5x4
	    neighbours = {"north":10, "south":0, "west":19, "east":16,
			  "nw":14, "ne":11, "sw":4, "se":1}
	    checkNeighbours(board5x4, 5, 15, neighbours);

	    // neighbours for cell 19 in board5x4
	    neighbours = {"north": 14, "south":4, "west":18, "east":15,
			  "nw":13, "ne":10, "sw":3, "se":0}
	    checkNeighbours(board5x4, 5, 19, neighbours);
	    
	    // neighbours for cell 0 in board4x3
	    neighbours = {"north": 8, "south":4, "west":3, "east":1,
			  "nw":11, "ne":9, "sw":7, "se":5}
	    checkNeighbours(board4x3, 4, 0, neighbours);
	});
	
    });

    describe ('updates board', () => {
	let board = createBoard(5,3);
	const topAlive = createBoard(5,3,[0,1,2,3,4]);
	const allButTopAlive = createBoard(5,3,[5,6,7,8,9,10,11,12,13,14]);
	let newBoard = [];
	
	it ('toggles dead cells to alive cells', () => {
	    // resurrect the top row
	    newBoard = updateBoard(board, [0,1,2,3,4]);
	    expect(newBoard).to.equal(topAlive);			    
	});

	it ("doesn't modify the original board", () => {
	    expect(board).to.not.equal(newBoard);
	});

	it ('toggles live cells to dead cells', () => {
	    // toggle all alive to dead, and vise versa
	    newBoard = updateBoard(newBoard, [0,1,2,3,4,5,6,7,8,9,
					      10,11,12,13,14]);
	    expect(newBoard).to.equal(allButTopAlive);
	});
	
    });

    describe ('clears the board', () => {
	// random alive and dead cells
	const board = createBoard(50, 10, [], true);

	it ('clears the board', () => {
	    const clearedBoard = clearBoard(board);
	    expect('cleardBoard'.includes(ALIVE)).to.equal(false);
	});
    });
    
	    
});
