export const asyncSuffixes = {
  ERROR: 'ERROR',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS'
}

const createAsyncTypes = typeString => {
  return Object.keys(asyncSuffixes).reduce((accum, suffixKey) => {
    const suffix = asyncSuffixes[suffixKey]
    return {
      [suffix]: `${typeString}_${suffixKey}`,
      ...accum
    }
  }, {})
}

// Sync Types
export const SET_USER = "SET_USER";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
export const INLINE_LOADING = "INLINE_LOADING"
export const LOADING = "LOADING"

// Async Types
export const LOGIN_ASYNC = createAsyncTypes('LOGIN')
