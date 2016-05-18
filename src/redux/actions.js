export function createBoard(width, height, liveCells, random) {
    return {
	type: "CREATE_BOARD",
	width,
	height,
	liveCells,
	random
    }
}

export function tick() {
    return {
	type: "TICK"
    }
}

export function start() {
    return {
	type: "START"
    }
}

export function stop() {
    return {
	type: "STOP"
    }
}

export function clear() {
    return {
	type: "CLEAR"
    }
}

export function randomise() {
    return {
	type: "RANDOMISE"
    }
}

export function toggleCellStatus(cell) {
    return {
	type: "TOGGLE_CELL_STATUS",
	cell
    }
}

	
	   


