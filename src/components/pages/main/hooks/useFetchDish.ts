import {useEffect, useState} from 'react';

export interface IRecipe {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strInstructions: string;
    strSource: string;
}


interface IResponse {
    meals: IRecipe[]
}

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const useFetchDish = () => {
    const [dish, setDish] = useState<IResponse | undefined>();
    const fetchDish = async () => {
        const response = await fetch(url);
        const data: IResponse = await response.json()
        setDish(data);
    }

    useEffect(() => {
        fetchDish()
    }, [])

    return {
        dish: dish && dish.meals[0],
        setDish,
        fetchDish
    }
};

export default useFetchDish;