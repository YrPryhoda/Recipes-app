import React from 'react';
import DishCard from "../../DishCard";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {AppState} from "../../../redux/appReducer";

const FavouritesPage = () => {
    const dishesList = useSelector((state: AppState) => state.favourites);

    const listJSX = dishesList.length ?
        dishesList.map(item => <DishCard dish={item} key={item.idMeal}/>) :
        <div className={styles.info}> Favourites dishes not found</div>

    return <div className={styles.container}>
        {listJSX}
    </div>
};

export default FavouritesPage;