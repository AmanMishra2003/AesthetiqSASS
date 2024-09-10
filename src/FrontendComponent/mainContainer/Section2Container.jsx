import DetailsComponent from "./DetailsComponent"
import { artistData } from "../../assets/sectionArtistData"

function Section2Container() {
    return (
        <>
            <div className="outterdiv">
                {
                    artistData.map((ele,i)=>(
                        <DetailsComponent key={i} name={ele.name} description={ele.description} image={ele.image} imageShow={true}/>
                    ))
                }

                <div className="innerdiv">

                </div>
            </div>
        </>
    )
}

export default Section2Container
