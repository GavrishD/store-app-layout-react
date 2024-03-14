import './promo.css';
import promoImg from './img/promo-img.png';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <h1>
                            <span className="highlight"><span>Let's</span></span>explore <span className="highlight highlight--yellow"><span>unique</span></span> clothes.
                        </h1>
                        <div className="promo__desc">Live for Influential and Innovative fashion!</div>
                        <div className="promo__btn-wrapper">
                            <span></span>
                            <button type="button">Shop Now</button>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="Promo fashion" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;