import React from "react";
import { Counter } from "./Counter";

export const One = () => (
  <Counter count={1} increaseCount={() => {}} decreaseCount={() => {}} />
);

export const Many = () => (
  <Counter count={999} increaseCount={() => {}} decreaseCount={() => {}} />
);
