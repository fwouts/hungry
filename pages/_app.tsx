import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { AppState, AppStateContext } from "../AppState";
import { RESTAURANT_LIST } from "../data";
import { ScreenContainer } from "../screens/ScreenContainer";
import "../styles/globals.css";

export default function HungryApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenContainer>
      <NextNProgress />
      <AppStateContext.Provider value={new AppState(RESTAURANT_LIST)}>
        <Component {...pageProps} />
      </AppStateContext.Provider>
    </ScreenContainer>
  );
}
