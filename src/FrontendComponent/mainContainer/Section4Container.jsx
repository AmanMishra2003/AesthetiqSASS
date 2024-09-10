import DetailsComponent from "./DetailsComponent"

function Section4Container() {
    return (
            <>
                <div className="outterdiv">
                        <img src="/images/triangleFace.png" alt="triangleFace" className="imageTriangleFace" />
                        <DetailsComponent name="Andrie Joseph" description="I represented a sculpture of a fallen angel, symbolizing the tragic descent trom grace, embodying themes of loss and redemption." imageShow={false}/>
                    <div className="innerdiv">
                    </div>
                </div>
            </>
        )
}

export default Section4Container
