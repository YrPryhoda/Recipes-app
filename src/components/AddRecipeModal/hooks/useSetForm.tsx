import React, {useState} from 'react';
import {IRecipe} from "../../pages/main/hooks/useFetchDish";

type IElement = HTMLTextAreaElement | HTMLInputElement;

const useSetForm = () => {
    const [form, setForm] = useState({} as IRecipe);

    const handlerFormChanged = (event: React.ChangeEvent<IElement>) => {
        setForm((prevForm) => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }))
    }

    return {
        form,
        handlerFormChanged
    }
};

export default useSetForm;