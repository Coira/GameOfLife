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

export function startGameAction() {
    return {
	type: "START_GAME"
    }
}


