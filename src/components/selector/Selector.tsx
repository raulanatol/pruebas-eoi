import React from "react";
import { useWidth } from "../../hooks/useWidth";

const SelectorGrande = () => <h1>HOLA</h1>;
const SelectorPequeno = () => <h5>HOLA</h5>;

export const Selector = () => {
  const width = useWidth();
  if (width > 200) {
    return <SelectorGrande/>;
  }
  return <SelectorPequeno/>;
};

