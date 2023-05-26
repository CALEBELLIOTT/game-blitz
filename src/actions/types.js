export const asyncSuffixes = {
  ERROR: 'ERROR',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS'
}

const createAsyncTypes = typeString => {
  return Object.keys(asyncSuffixes).reduce((accum, suffixKey) => {
    const suffix = asyncSuffixes[suffixKey]
    const returnValue = {
      [suffix]: `${typeString}_${suffixKey}`,
      ...accum
    }
    console.log(returnValue);
    return returnValue
  }, {})
}

// Sync Types
export const SET_USER = "SET_USER";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"

// Async Types
export const LOGIN_ASYNC = createAsyncTypes('LOGIN')
