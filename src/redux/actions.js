export function createBoardAction(width, height, liveCells) {
    return {
	type: "CREATE_BOARD",
	width,
	height,
	liveCells
    }
}

export function tickAction() {
    return {
	type: "TICK"
    }
}

export function startAction() {
    return {
	type: "START"
    }
}

export function stopAction() {
    return {
	type: "STOP"
    }
}

export function toggleCellStatusAction(cell) {
    return {
	type: "TOGGLE_CELL_STATUS",
	cell
    }
}

	
	   


