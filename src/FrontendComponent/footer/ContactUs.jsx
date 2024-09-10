import Button from "../Button"
import instagram from "./../../assets/instagram.svg"
import linkedIn from "./../../assets/linkedIn.svg"
import youtube from "./../../assets/youtube.svg"
import facebook from "./../../assets/facebook.svg"

function ContactUs() {
    return (
        <div className="ContantUsForm">
            <h4 className="heading">Contact</h4>
            <form>
                <input type="text" name="msg" />
                <Button>
                    →
                </Button>
            </form>
            <ul className="socialMediaLinks">
                <li><img src={instagram} alt="" /></li>
                <li><img src={youtube} alt="" /></li>
                <li><img src={linkedIn} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
            </ul>
            
        </div>
    )
}

export default ContactUs
