function Details({name, price}) {
    return (
        <div className="details">
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <div>
                    <a href=""><img src="/images/Vector.png" alt="" /></a>
                </div>
                    
        </div>
    )
}

export default Details
