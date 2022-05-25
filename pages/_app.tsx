import type { AppProps } from "next/app";
import { useMemo } from "react";
import { AppState, AppStateContext } from "../AppState";
import { ScreenContainer } from "../screens/ScreenContainer";
import "../styles/globals.css";

export default function HungryApp({ Component, pageProps }: AppProps) {
  const appState = useMemo(() => new AppState(), []);
  return (
    <ScreenContainer>
      <AppStateContext.Provider value={appState}>
        <Component {...pageProps} />
      </AppStateContext.Provider>
    </ScreenContainer>
  );
}
