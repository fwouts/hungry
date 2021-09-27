import type { AppProps } from "next/app";
import React from "react";
import { AppState, AppStateContext } from "../AppState";
import { RESTAURANT_LIST } from "../data";
import { ScreenContainer } from "../screens/ScreenContainer";
import "../styles/globals.css";

export default function HungryApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenContainer>
      <AppStateContext.Provider value={new AppState(RESTAURANT_LIST)}>
        <Component {...pageProps} />
      </AppStateContext.Provider>
    </ScreenContainer>
  );
}
