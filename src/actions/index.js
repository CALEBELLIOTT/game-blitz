import * as types from './types'
export const createAction = type => payload => ({ payload, type })
export const createAsyncAction = type => {
  console.log(types, 'type');
  return Object.assign(
    createAction(type.PENDING),
    {
      error: payload => ({ error: true, payload, type: type.ERROR }),
      success: payload => ({ payload, type: type.SUCCESS })
    }, { type }
  )
};

// Sync Actions
export const setUser = createAction(types.SET_USER)
export const inlineLoading = createAction(types.INLINE_LOADING)
export const loading = createAction(types.LOADING)
export const setIsGuest = createAction(types.SET_IS_GUEST)

// Async Actions
export const login = createAsyncAction(types.LOGIN_ASYNC)