function MenuBurger({onClick, open}) {

    const color = open? '#C7C4BF':"#45413C"
    const displaytype = open? 'fixed':"absolute"
    return (
        <div className="menuBurger" onClick={onClick} style={{position:displaytype}} >
            <div className="one" style={{backgroundColor:color}} ></div>
            <div className="two" style={{backgroundColor:color}} ></div>
            <div className="three" style={{backgroundColor:color}} ></div>
        </div>
    )
}

export default MenuBurger
