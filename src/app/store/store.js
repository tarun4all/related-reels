import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { ACTIONS } from "./actions";

export const ReelsContext = createContext(initialState);

export default function StoreWrapper({ children }) {
  const [reels, dispatch] = useReducer(reducer, initialState);

  const value = {
    reels,
    updateVideos: (videos) => {
      dispatch({ type: ACTIONS.UPDATE_VIDEOS, value: videos });
    },
  };

  return (
    <ReelsContext.Provider value={value}>{children}</ReelsContext.Provider>
  );
}
