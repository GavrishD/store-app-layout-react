import './favourite.css';

import CardFavourite from "../cards/CardFavourite";

import imageFirst from './img/promo-01.jpg';
import imageSecond from './img/promo-02.jpg';

const Favourite = () => {
    return (
        <section className="favourite">
            <div className="container">
            <div className="favourite__header decor">
                <h2 className="favourite__title title">Young’s Favourite</h2>
            </div>
            <div className="favourite__cards">
                <CardFavourite title="Trending on instagram" img={imageFirst} />
                <CardFavourite title="All Under $40" img={imageSecond} />
            </div>
            </div>
        </section>
    );
}

export default Favourite;