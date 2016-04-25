import {createBoard, getNeighbours} from 'board.js';

export function countLive(cells) {
    return cells.count((cell) => (cell.get("alive") === true));
}

export function applyRules(cell, neighbours) {
    const liveCount = countLive(neighbours);

    if (liveCount < 2) {
	return false;
    }
    else if (liveCount === 2) {
	return cell.get("alive");
    }
    else if (liveCount === 3) {
	return true;
    }
    else {
	return false;
    }
}

export function tick(board, width, generation=0) {
    let liveCells = [];
    for (var i = 0; i < board.length; i++) {
	let cell = board.get(i);
	let nbs = getNeighbours(board, i, width);
	let alive = applyRules(cell, nbs);
	if (alive) {
	    liveCells.push(i);
	}
    }
    
    return updateBoard(board, liveCells);
}
