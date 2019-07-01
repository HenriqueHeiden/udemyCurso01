import firebase from 'firebase';

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
    type: SET_WHOLE_SERIE,
    serie
});

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value,
    }
}

export const SERIE_SAVED_SUCESS = 'SERIE_SAVED_SUCESS';
const serieSavedSucess = () => ({
    type: SERIE_SAVED_SUCESS
});


export const RESET_FORM = 'RESET_FORM'
export const resetForm = () => ({
    type: RESET_FORM
});

export const saveSerie = serie => {
    const { currentUser } = firebase.auth();
    const db = firebase.database();
    return dispatch => {
        if(serie.id){
            return db
            .ref(`/users/${currentUser.uid}/series/${serie.id}`)
            .set(serie)
            .then(() => dispatch(serieSavedSucess()) )
            .catch();
        }
        return db
            .ref(`/users/${currentUser.uid}/series`)
            .push(serie)
            .then(() => dispatch(serieSavedSucess()) )
            .catch();
    }
}

