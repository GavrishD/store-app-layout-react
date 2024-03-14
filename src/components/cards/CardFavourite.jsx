import styles from './Card.module.css';
import arrowImg from "./../../img/icons/arrow.svg";

const CardFavourite = (props) => {
    return (
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__image} src={props.img} alt="Promo image"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>{props.title}</div>
                    <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}

export default CardFavourite;