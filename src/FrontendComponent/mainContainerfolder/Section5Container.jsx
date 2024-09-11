import { GridImages } from "../../assets/gridImageArray"
import GridImageBox from "./GridImageBox"
import Button from "../Button"

function Section5Container() {
    return (
        <div className="newCollectionContainer">
            <div className="headingContainer">
                <h3 className="heading">New Collections</h3>
                <div className="line"></div>
            </div>
            <div className="gridDisplay">
                {
                    GridImages.map((ele,i)=>(
                        <GridImageBox key={i} ele={ele} id={i}/>
                    ))
                }
            </div>
            <div className="btntoggleBar">
                <Button>
                    <img src="/images/arrow.svg" alt="" />
                </Button>
            </div>
        </div>
    )
}

export default Section5Container
