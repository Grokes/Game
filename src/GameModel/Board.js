import Checker from "./Checker";


class Board {
    _checkers = []

    constructor() {
        this._checkers.push(new Checker(5,5))
        this._checkers.push(new Checker(6,6))
        this._checkers.push(new Checker(3,3))
        this._checkers.push(new Checker(4,4))
    }
}

export default Board;