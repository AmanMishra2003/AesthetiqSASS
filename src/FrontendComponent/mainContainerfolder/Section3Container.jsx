import { pickForYou } from "../../assets/pickforYou"
import Section3PickForYouItem from "./Section3PickForYouItem"
import Button from "../Button"

function Section3Container() {
    return (
        <div className="section3Container">
            <div className="imageContainer">
                <img src="/images/texvn.png" alt="" />
            </div>
           
            <div className="headingContainer">
                <h3 className="heading">Picks for You</h3>
                <div className="line"></div>
            </div>
            <div className="pickForYouContent">
                {
                    pickForYou.map((ele,i)=>(
                        <Section3PickForYouItem key={i} ele={ele}/>
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

export default Section3Container
