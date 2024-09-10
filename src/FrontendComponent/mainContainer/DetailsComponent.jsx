import Button from "../Button"


function DetailsComponent({image, name,description , imageShow=false }) {
    return (
        <div className="ArtistsDetialsComponent">
            {
                imageShow
                &&
                <div className="img">
                   <img src={image} alt="someImage" />
                </div>
            }
            
            <div className="dataContainer">
                
                    <div className="name">
                            {name}
                    </div>
                    <div className="description">
                            {description}
                    </div>
                    <Button>
                        Visit Profile
                    </Button>
                    <img src="/images/starImage.png" alt="" className="starImage"/>
            </div>
           
        </div>
    )
}

export default DetailsComponent
