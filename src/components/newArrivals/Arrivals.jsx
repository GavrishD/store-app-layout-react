import './arrivals.css';
import Card from "../cards/CardArrivals";

import hoodies from './img/cat-01.jpg';
import coats from './img/cat-02.jpg';
import tees from './img/cat-03.jpg';

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrival__header decor">
                    <h2 className='arrivals__title title'>New arrivals</h2>
                </div>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" img={hoodies}/>
                    <Card title="Coats & Parkas" img={coats}/>
                    <Card title="Tees & T-Shirt" img={tees}/>
                </div>
            </div>
        </section>
    );
}

export default Arrivals;