import Details from "./Details"

function Section3PickForYouItem({ele}) {
    return (
        <div className="itemContainer">
            <div className="itemImage">
                <img src={ele} alt="" />
                <div className="detailsWithAbsolutePositioning">
                    <Details name="Sculptures" price="$120.99"/>
                </div>
            </div>
        </div>
    )
}

export default Section3PickForYouItem
