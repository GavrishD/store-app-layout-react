import './brands.css';

import hmLogo from "./img/HM.png";
import obeyLogo from "./img/Obey.png";
import shopifyLogo from "./img/Shopify.png";
import lacosteLogo from "./img/Lacoste.png";
import levisLogo from "./img/Levis.png";
import amazonLogo from './img/Amazon.png';

const Brands = () => {
    return (
        <section className='brands'>
            <div className="container">
                <ul className='brands__list'>
                    <li><a href="#!"><img src={hmLogo} alt='HM Logo' /></a></li>
                    <li><a href="#!"><img src={obeyLogo} alt='Obey Logo' /></a></li>
                    <li><a href="#!"><img src={shopifyLogo} alt='Shopify Logo' /></a></li>
                    <li><a href="#!"><img src={lacosteLogo} alt='Lacoste Logo' /></a></li>
                    <li><a href="#!"><img src={levisLogo} alt='Levis Logo' /></a></li>
                    <li><a href="#!"><img src={amazonLogo} alt='Amazon Logo' /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Brands;