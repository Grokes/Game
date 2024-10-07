import '../Board.css'
function BackgroundCellGenerator() {

    let backgroundCells = [];

    for(let counterY = 1 ; counterY <= 8; counterY++) {
        for(let counterX = 1 ; counterX <= 8; counterX++) {
            if (counterY % 2 === 1) {
                backgroundCells.push(
                    <div className="Cell FirstRow" style={{gridRow: counterY, gridColumn: counterX}}></div>
                )
            }
            else{
                backgroundCells.push(
                    <div className="Cell SecondRow" style={{gridRow: counterY, gridColumn: counterX}}></div>
                )
            }
        }
    }

    return backgroundCells;
}
export default BackgroundCellGenerator;