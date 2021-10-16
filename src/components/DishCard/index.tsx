import React from 'react';
import styles from './styles.module.scss';
import {IRecipe} from '../pages/main/hooks/useFetchDish';
import placeholder from './assets/placeholder.jpg';

interface IProps {
    dish: IRecipe;
    withButtons?: boolean;
    onSkip?: () => void;
    onLike?: () => void;
}

const DishCard = ({dish, onSkip, onLike, withButtons}: IProps) => {

    return (
        <div className={styles.card} key={dish.idMeal}>
            <img src={dish.strMealThumb || placeholder} alt="img" className={styles.card__img}/>
            <div className={styles.card__body}>
                <h2 className={styles.card__title}>{dish.strMeal}</h2>
                <div className={styles.card__description}>
                    {dish.strInstructions}
                </div>
            </div>
            {
                withButtons && (
                    <div className={styles.card__buttonsBlock}>
                        <button
                            className={styles.card__btn}
                            onClick={onSkip}
                        >
                            Skip
                        </button>
                        <button
                            className={styles.card__btn}
                            onClick={onLike}
                        >
                            Like
                        </button>
                    </div>
                )
            }

        </div>
    );
};

export default DishCard;