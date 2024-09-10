function AboutUsSection() {
    return (
        <div className="aboutUsSection">
            {/* <div className="imageContainer"> */}
            <img src="/images/aboutUsBgImage.jpg" alt="" />
            {/* </div> */}
            
            <div className="aboutUsContent">
                <p className="heading">About Us</p>
                <div className="description">
                <p>Discover a curated collection of unique artworks from emerging and established artists. The platform connects art lovers with extraordinary pieces, offering a seamless experience for discovering, appreciating, and purchasing creative works that inspire and captivate</p>
                <br />
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste illo, architecto aspernatur inventore adipisci quas tempora porro, in eum quisquam assumenda sed, dolore numquam sint nihil? Commodi dolorum voluptas, perferendis repudiandae, laborum tenetur molestiae obcaecati iure eius unde totam illum laudantium facilis necessitatibus repellendus est aliquid culpa provident ad.</p> */}
                </div>
                <p className="connectUsLink">
                    <a href="#">Connect</a>
                </p>
            </div>
        </div>
    )
}

export default AboutUsSection
