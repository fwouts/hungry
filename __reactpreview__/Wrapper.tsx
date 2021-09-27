import React from "react";
import { AppState, AppStateContext } from "../AppState";
import { RESTAURANT_LIST } from "../data";
import { ScreenContainer } from "../screens/ScreenContainer";

const state = new AppState(RESTAURANT_LIST);

export const Wrapper: React.FC = ({ children }) => {
  return (
    <ScreenContainer>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </ScreenContainer>
  );
};
