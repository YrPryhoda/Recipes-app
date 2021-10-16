import React from 'react';
import useFetchDish from "./hooks/useFetchDish";
import styles from './styles.module.scss';
import DishCard from "../../DishCard";
import {useDispatch} from "react-redux";
import {ADD_TO_FAVOURITES} from "../../../redux/appReducer";

const MainPage = () => {
    const {dish, fetchDish} = useFetchDish();
    const dispatch = useDispatch();
    const handlerOnSkip = () => fetchDish();
    const handlerOnLike = () => {
        localStorage.setItem(dish!.idMeal, JSON.stringify(dish))
        dispatch({
            type: ADD_TO_FAVOURITES,
            payload: dish
        })
    };

    return (
        <div className={styles.container}>
            {
                !dish ? <div> Loading... </div> : <DishCard
                    dish={dish}
                    onSkip={handlerOnSkip}
                    onLike={handlerOnLike}
                    withButtons
                />
            }
        </div>
    );
};

export default MainPage;