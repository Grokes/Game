import image from "../../../../Images/white_checker.png";

function WhiteChecker({x, y}){
    return <div style={{gridColumn:x, gridRow:y}}>
        <img src={image} alt="white checker image"/>
    </div>
}

export default WhiteChecker;