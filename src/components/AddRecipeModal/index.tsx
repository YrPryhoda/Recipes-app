import React from 'react';
import styles from './styles.module.scss';
import useSetForm from "./hooks/useSetForm";

interface IProps {
    onClose: () => void;
    onSubmit: (form: any, event: any) => void;
}

const AddRecipeModal = ({onClose, onSubmit}: IProps) => {

    const {form, handlerFormChanged} = useSetForm();

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalForm}>
                <div className={styles.modalForm__close} onClick={onClose}>
                    <span>Close</span>
                </div>
                <h2>Add custom dish</h2>
                <form className={styles.modalForm__form}>
                    <input
                        name='strMeal'
                        type="text"
                        placeholder={'Dish title'}
                        className={styles.modalForm__title}
                        value={form.strMeal || ''}
                        onChange={handlerFormChanged}
                    />
                    <textarea
                        placeholder='Dish description...'
                        className={styles.modalForm__description}
                        onChange={handlerFormChanged}
                        name='strInstructions'
                        value={form.strInstructions || ''}
                    >
                    </textarea>
                    <input
                        type="button"
                        value="Add custom dish"
                        className={styles.modalForm__btn}
                        onClick={(e) => onSubmit(form, e)}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddRecipeModal;