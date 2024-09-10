import ReusableFooterContainer from "./ReusableFooterContainer";
import ContactUs from "./ContactUs";

const product = [
    'New Collection', 
    'Clearance Sales', 
    'Auctions', 
]

const help =[
    'My Account',
    'Order',
    'Purchases',
    'Deliveries'
]

function FooterSection() {
    return (
        <div className="footerContainer">
                <ReusableFooterContainer name="Product" data={product}/>
                <ReusableFooterContainer name="Help" data={help}/>
                <ContactUs/>

                <div className="line"></div>

                <div className="credits">
                    <span>&copy; Copyrights</span> <span>Developer : <a href="https://www.linkedin.com/in/amanmishra2003/" target="_blank">@Aman Mishra2003</a></span> || <span>UI/Wx Designer : <a href="https://www.behance.net/nishantnegi03" target="_blank">@NishantNegi03</a></span>
                </div>
        </div>
    )
}

export default FooterSection
