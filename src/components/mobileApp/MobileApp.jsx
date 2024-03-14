import './mobileApp.css';

import promoApp from "./img/vouchers-img.png";
import appStore from './img/icons/app-store.png';
import googlePlay from './img/icons/google-play.png';

const MobileApp = () => {
    return (
        <section className='mobile'>
            <div className="container">
                <div className="mobile__content">
                    <div className="mobile__title">Download app & get the voucher!</div>
                    <div className="mobile__text">Get 30% off for first transaction using Rondovision mobile app for now.</div>
                    <div className="mobile__icons">
                        <a href="#!"><img src={appStore} alt="App Store" /></a>
                        <a href="#!"><img src={googlePlay} alt="Google Play" /></a>
                    </div>
                </div>
                <img src={promoApp} alt="Promo App" />
            </div>
        </section>
    );
}

export default MobileApp;