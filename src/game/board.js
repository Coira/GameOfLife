import {List, fromJS} from 'immutable';

let cells = {};

export const DEAD = 0;
export const ALIVE = 1;
export const AGED = 2;

export function createBoard(width, height, alive = [], random=false) {
    const boardSize = width*height;

    cells = {};
    
    let board = [];
    for (let i = 0; i < boardSize; i++) {
	board.push(DEAD)
    }
    
    if (random) {
	alive = [];
	for (let i = 0; i < boardSize; i++) {
	    if (Math.random() >= 0.5) {
		alive.push(i);
	    }
	}
    }

    alive.forEach((i) => {
	if (i >= 0 && i < boardSize) {
	    board[i] = ALIVE;
	}
    });

    let immutableBoard = fromJS(board);
    immutableBoard.setSize(boardSize);
    
    return immutableBoard;
}

function cycle(state) {
    switch(state) {
	case DEAD: return ALIVE;
	case ALIVE: return DEAD;
	case AGED: return DEAD;
    }
}

// toggles a changed cell from dead to alive or vise versa
export function updateBoard(board, changedCells = [], agedCells = []) {

    changedCells.forEach((cellPos) => {
	board = board.set(cellPos, cycle(board.get(cellPos)));
    });

    return board;
    
}

export function getNorthNeighbour(board, cellPos, width) {
    return (((cellPos-width) % board.size) + board.size) % board.size;
}

export function getSouthNeighbour(board, cellPos, width) {
    return (cellPos+width) % board.size;
}


export function getWestNeighbour(board, cellPos, width) {
    const i = cellPos;
    // i.e `p = i - (i % w) + (i-1) % w`, if js dealt with negative modulo
    // in the traditional way
    return i - (i % width) + (((i-1) % width) + width) % width;
}

export function getEastNeighbour(board, cellPos, width) {
    const i = cellPos;
    return i - (i % width) + (i+1) % width;    
}

export function getNorthWestNeighbour(board, cellPos, width) {
    const north = getNorthNeighbour(board, cellPos, width);
    return getWestNeighbour(board, north, width);
}

export function getNorthEastNeighbour(board, cellPos, width) {
    const north = getNorthNeighbour(board, cellPos, width);
    return getEastNeighbour(board, north, width);
}

export function getSouthWestNeighbour(board, cellPos, width) {
    const south = getSouthNeighbour(board, cellPos, width);
    return getWestNeighbour(board, south, width);
}

export function getSouthEastNeighbour(board, cellPos, width) {
    const south = getSouthNeighbour(board, cellPos, width);
    return getEastNeighbour(board, south, width);
}

export function getNeighbours(board, cellPos, width) {

    const pos = cellPos;
    let neighbours = [];

    // quick and dirty memoization
    if (!cells[pos]) {
	let neighbourPositions = [getNorthNeighbour(board, cellPos, width),
				  getSouthNeighbour(board, cellPos, width),
				  getWestNeighbour(board, cellPos, width),
				  getEastNeighbour(board, cellPos, width),
				  getNorthWestNeighbour(board, cellPos, width),
				  getNorthEastNeighbour(board, cellPos, width),
				  getSouthWestNeighbour(board, cellPos, width),
				  getSouthEastNeighbour(board, cellPos, width)];
	cells[pos] = neighbourPositions;
    }

    neighbours = cells[pos];
    return List(neighbours.map((cellPos) => (board.get(cellPos))));
}


