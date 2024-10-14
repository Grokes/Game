import BlackChecker from "./BlackChecker";

function GameModelCheckerGenerator({GameModel}){
    let result = []
    let checkers = GameModel._board._checkers

    for (const checker of checkers){
        const row = checker._row
        const column = checker._column

        result.push(<BlackChecker key={`boardCell_${column}_${row}`} x={column} y={row}/>)
    }

    return result
}

export default GameModelCheckerGenerator;