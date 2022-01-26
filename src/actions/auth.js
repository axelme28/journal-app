import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const startLoginEmail = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password));
        }, 2000);
    };
};

export const startLoginGoogle = () => {
    return async (dispatch) => {
        const { user } = await firebase
            .auth()
            .signInWithPopup(googleAuthProvider);
        dispatch(login(user.uid, user.displayName));
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});
