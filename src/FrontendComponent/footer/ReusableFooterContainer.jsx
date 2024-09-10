function ReusableFooterContainer({name, data}) {
    return (
        <div className="footerOptionContainer">
            <h4 className="heading">{name}</h4>
            {
                data.map((ele,i)=>(
                    <div className="options" key={i}>{ele}</div>
                ))
            }
        </div>
    )
}

export default ReusableFooterContainer
