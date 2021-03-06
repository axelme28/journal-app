import { types } from "../types/types";

export const setErrorAction = (msgError) => {
    return {
        type: types.uiSetError,
        payload: msgError,
    };
};

export const removeErrorAction = () => ({
    type: types.uiRemoveError,
});
