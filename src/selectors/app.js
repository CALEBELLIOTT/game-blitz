export const setLoading = (state, payload) => ({ ...state, loading: payload })
export const getLoading = state => state.app.loading
export const setInlineLoading = (state, payload) => ({ ...state, inlineLoading: payload })
export const getInlineLoading = state => state.app.inlineLoading