const initalState = {
    loggedIn: false,
    userInfo: {},
    error: ''
}

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginSuccess = (userInfo) => ({
    type: LOGIN_SUCCESS,
    userInfo
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

export const loginFailure = (message) => ({
    type: LOGIN_FAILURE,
    message
})

export const login = (username, password) => (dispatch, getState) => {

    //Call api for checking user authentication
    console.log(username, password)
    
    //dispatch(loginSuccess(response.userInfo))
    dispatch(loginFailure('Please check your creadentials and login again'))
}

export const session = (session = initalState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...session,
                loggedIn: true,
                userInfo: action.userInfo
            }
        case LOGOUT_SUCCESS:
            return {
                ...initalState
            }
        case LOGIN_FAILURE:
            return {
                ...session,
                error: action.message
            }
        default: 
            return session;
    }
}