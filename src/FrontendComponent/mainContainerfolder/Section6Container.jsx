import Category from "./Category"
const categories = [
    'painting',
    'abstract',
    'griffiti',
    'sculpture',
    'homespun',
]

function Section6Container() {
    return (
        <>
            <div className="categories">
                <h3>Categories</h3>
                <div className="categoriesContainer">
                    {
                        categories.map((ele,i)=>(
                            <Category key={i} categoryName={ele}/>
                        ))
                    }   
                </div>
                
            </div>
            {/* <div className="imageConatiner"> */}
                <img src="/images/categorySectionShowImage.png" alt="showImage" />
            {/* </div> */}
            
            
        </>
    )
}

export default Section6Container
