import Details from "./Details"

function GridImageBox({ele }) {
    
    return (
        <div className="gridImageContainer">
            <div className="imgContainer">
            <img src={ele.image} alt={`${ele} Image`} />
            </div>
            <Details name="Wall Painting" price="$119.99"/>
        </div>
    )
}

export default GridImageBox
