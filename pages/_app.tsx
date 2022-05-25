import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useMemo } from "react";
import { AppState, AppStateContext } from "../AppState";
import { ScreenContainer } from "../screens/ScreenContainer";
import "../styles/globals.css";

export default function HungryApp({ Component, pageProps }: AppProps) {
  const appState = useMemo(() => new AppState(), []);
  return (
    <ScreenContainer>
      <NextNProgress />
      <AppStateContext.Provider value={appState}>
        <Component {...pageProps} />
      </AppStateContext.Provider>
    </ScreenContainer>
  );
}
