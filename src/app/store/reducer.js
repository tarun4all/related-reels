import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VIDEOS:
      return [...(action.value || [])];
  }

  return state;
};

export const initialState = [];
