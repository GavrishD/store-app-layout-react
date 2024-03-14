import './footer.css';

import facebook from './img/fb.svg';
import instagram from './img/inst.svg';
import twitter from './img/tw.svg';
import linkedin from './img/in.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__contacts">
                    <div className="footer__logo">FASHION</div>
                    <div className="footer__text">Complete your style with awesome clothes from us.</div>
                    <div className="footer__social">
                        <a href="#!"><img src={facebook} alt="Facebook" /></a>
                        <a href="#!"><img src={instagram} alt="Instagram" /></a>
                        <a href="#!"><img src={twitter} alt="Twitter" /></a>
                        <a href="#!"><img src={linkedin} alt="Linkedin" /></a>
                    </div>
                </div>
                <div className="footer__items">
                    <div className="footer__item">
                        <div className="item__title">Company</div>
                        <ul>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="item__title">Quick Link</div>
                        <ul>
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="item__title">Legal</div>
                        <ul>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;