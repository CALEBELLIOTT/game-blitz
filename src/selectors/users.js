export const setUserData = (state, payload) => ({ ...state, user: payload })
export const getUserData = state => state.user.user

export const setLoginError = (state, payload) => ({ ...state, loginError: payload })
export const getLoginError = state => state.user.loginError


export const setIsGuest = (state, payload) => ({ ...state, isGuest: payload })
export const getIsGuest = state => state.user.isGuest