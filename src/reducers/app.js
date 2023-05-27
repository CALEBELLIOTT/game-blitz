// @ts-nocheck
import { LOADING, INLINE_LOADING } from "../actions/types";
import { setLoading, setInlineLoading } from "../selectors/app";

const initialState = {
  app: {},
};

const noop = type => () => {
  // console.error(`no reducer for type ${type}`);
}
export const appReducer = (state = initialState, { type, payload, error }) => ({
  [LOADING]: () => setLoading(state, payload),
  [INLINE_LOADING]: () => setInlineLoading(state, payload)
}[type] || noop(type))() || state;
