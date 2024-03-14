import './sale.css';

const Sale = () => {
    return (
        <section className='sale'>
            <div className="container">
                <div className="sale__block">
                    <div className="sale__content">
                        <div className="sale__title"><span className='highlight'><span>Payday</span></span>sale now</div>
                        <div className="sale__info">
                            <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
                            <span>1 June - 10 June 2021</span>
                            <p>*Terms & Conditions apply</p>
                        </div>
                        <div className="sale__btn">Shop now</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sale;