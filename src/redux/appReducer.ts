import {IRecipe} from "../components/pages/main/hooks/useFetchDish";

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

interface State {
    isModal: boolean;
    favourites: [] | IRecipe[];
}

const initialState = {
    isModal: false,
    favourites: Object.keys(localStorage).map(id => JSON.parse(localStorage.getItem(id)!))
}

type AddToFavouritesType = {
    type: typeof ADD_TO_FAVOURITES,
    payload: IRecipe
}

type ModalToggleType = {
    type: typeof TOGGLE_MODAL,
}

type ActionType = AddToFavouritesType | ModalToggleType;

export const appReducer = (state: State = initialState, action: ActionType
) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isModal: !state.isModal
            }

        case ADD_TO_FAVOURITES:
            return {
                ...state,
                isModal: state.isModal && !state.isModal,
                favourites: [...state.favourites, action.payload]
            }

        default:
            return state;
    }
}

export type AppState = ReturnType<typeof appReducer>;