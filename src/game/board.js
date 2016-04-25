import {List, fromJS} from 'immutable';

export function createBoard(width, height, alive = []) {
    const boardSize = width*height;
    let board = [];
    
    for (let i = 0; i < boardSize; i++) {
	board.push({alive: false, pos:i});
    }

    alive.forEach((i) => {
	if (i >= 0 && i < boardSize) {
	    board[i].alive = true;
	}
    });

    let immutableBoard = fromJS(board);
    immutableBoard.setSize(boardSize);
    
    return immutableBoard;
}

export function updateBoard(board, liveCells = []) {
}


function position(cell) {
    if (typeof cell === "object") {
	return cell.get("pos");
    }
    else {
	return cell;
    }
}

export function getNorthNeighbour(board, cell, width) {
    return board.get(position(cell)-width);
}

export function getSouthNeighbour(board, cell, width) {
    return board.get((position(cell)+width) % board.size);
}


export function getWestNeighbour(board, cell, width) {
    const i = position(cell);
    // i.e `p = i - (i % w) + (i-1) % w`, if js dealt with negative modulo
    // in the traditional way
    const p = i - (i % width) + (((i-1) % width) + width) % width;
    return board.get(p);
}

export function getEastNeighbour(board, cell, width) {
    const i = position(cell);
    const p = i - (i % width) + (i+1) % width;
    return board.get(p);
    
}

export function getNorthWestNeighbour(board, cell, width) {
    const north = getNorthNeighbour(board, cell, width);
    return getWestNeighbour(board, north, width);
}

export function getNorthEastNeighbour(board, cell, width) {
    const north = getNorthNeighbour(board, cell, width);
    return getEastNeighbour(board, north, width);
}

export function getSouthWestNeighbour(board, cell, width) {
    const south = getSouthNeighbour(board, cell, width);
    return getWestNeighbour(board, south, width);
}

export function getSouthEastNeighbour(board, cell, width) {
    const south = getSouthNeighbour(board, cell, width);
    return getEastNeighbour(board, south, width);
}

export function getNeighbours(board, cell, width) {
    
    return List.of(getNorthNeighbour(board, cell, width),
		  getSouthNeighbour(board, cell, width),
		  getWestNeighbour(board, cell, width),
		  getEastNeighbour(board, cell, width),
		  getNorthWestNeighbour(board, cell, width),
		  getNorthEastNeighbour(board, cell, width),
		  getSouthWestNeighbour(board, cell, width),
		  getSouthEastNeighbour(board, cell, width));
}


