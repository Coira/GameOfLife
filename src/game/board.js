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
    return fromJS(board);
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
    return board.get(position(cell)+width);
}


export function getWestNeighbour(board, cell) {
    return board.get(position(cell)-1);
}

export function getEastNeighbour(board, cell) {
    return board.get(position(cell)+1);
}

export function getNorthWestNeighbour(board, cell, width) {
    return board.get(position(cell)-width-1);
}

export function getNorthEastNeighbour(board, cell, width) {
    return board.get(position(cell)-width+1);
}

export function getSouthWestNeighbour(board, cell, width) {
    return board.get(position(cell)+width-1);
}

export function getSouthEastNeighbour(board, cell, width) {
    return board.get(position(cell)+width+1);
}

export function getNeighbours(board, cell, width) {
    return board.get(position(cell)-width);
}


