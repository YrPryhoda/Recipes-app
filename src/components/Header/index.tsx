import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {v4} from 'uuid';
import styles from './styles.module.scss';
import {routes} from "../routes/routes";
import {AppState, TOGGLE_MODAL, ADD_TO_FAVOURITES} from "../../redux/appReducer";
import AddRecipeModal from "../AddRecipeModal";

const Header = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: AppState) => state.isModal);

    const handlerToggleModal = () => dispatch({type: TOGGLE_MODAL});
    const handlerOnSaved = (form: any, event: React.SyntheticEvent) => {
        event.preventDefault()
        const uid = v4()
        const newRecipe = {
            ...form,
            idMeal: uid,
        }
        localStorage.setItem(uid, JSON.stringify(newRecipe));

        dispatch({type: ADD_TO_FAVOURITES, payload: newRecipe})
    }

    const modalJSX = isModalOpen && (<AddRecipeModal
            onClose={handlerToggleModal}
            onSubmit={handlerOnSaved}/>
    );

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <NavLink to={routes.home} className={styles.header__btn}>Random dish </NavLink>
                <NavLink to={routes.favourites} className={styles.header__btn}> Favourites </NavLink>
                <button className={styles.header__btnAdd} onClick={handlerToggleModal}>
                    Add recipe
                </button>
            </div>
            {modalJSX}
        </div>
    );
};

export default Header;