import {createBoard, updateBoard, getNeighbours} from '../game/board';

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
    let changeCells = [];
    for (var i = 0; i < board.size; i++) {
	let cell = board.get(i);
	let nbs = getNeighbours(board, i, width);
	let living = applyRules(cell, nbs);

	// if the cell's living state changes, we store that
	// cell's position so we can update it later
	if (cell.get("alive") !== living) {
	    changeCells.push(i);
	}
    }

    // update the board with all the cells that have changed state
    return {board: updateBoard(board, changeCells),
	    generation: generation+1};
}

