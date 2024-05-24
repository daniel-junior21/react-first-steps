import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-media">
                <a href="facebook.com" target="_blank">
                    <img src="/images/fb.png" alt="facebook-ico" />
                </a>
                <a href="twitter.com" target="_blank">
                    <img src="/images/tw.png" alt="twitter-ico" />
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="/images/ig.png" alt="instagram-ico" />
                </a>
            </div>
            <div className="brand">
            <img src="/images/logo.png" alt="brand" />
            </div>
            <div className="created-by">
                <p>
                    created by Daniel Junior
                </p>
            </div>
        </div>
    )
}

export default Footer;