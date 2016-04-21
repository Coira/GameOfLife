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
    return fromJS(immutableBoard);
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


export function getWestNeighbour(board, cell) {
    return board.get(position(cell)-1);
}

export function getEastNeighbour(board, cell) {
    return board.get((position(cell)+1) % board.size);
}

export function getNorthWestNeighbour(board, cell, width) {
    return board.get(position(cell)-width-1);
}

export function getNorthEastNeighbour(board, cell, width) {
    return board.get((position(cell)-width+1) % board.size);
}

export function getSouthWestNeighbour(board, cell, width) {
    return board.get((position(cell)+width-1) % board.size);
}

export function getSouthEastNeighbour(board, cell, width) {
    return board.get((position(cell)+width+1) % board.size);
}

export function getNeighbours(board, cell, width) {
    
    return List.of(getNorthNeighbour(board, cell, width),
		  getSouthNeighbour(board, cell, width),
		  getWestNeighbour(board, cell),
		  getEastNeighbour(board, cell),
		  getNorthWestNeighbour(board, cell, width),
		  getNorthEastNeighbour(board, cell, width),
		  getSouthWestNeighbour(board, cell, width),
		  getSouthEastNeighbour(board, cell, width));
}


