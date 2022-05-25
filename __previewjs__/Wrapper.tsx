import React from "react";
import { ScreenContainer } from "../screens/ScreenContainer";
import "../styles/globals.css";

export const Wrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <ScreenContainer>{children}</ScreenContainer>;
};
