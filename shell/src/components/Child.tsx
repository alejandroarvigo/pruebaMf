import React from "react";
import { useEffect } from "react";
import { useStore } from "./../store";

const Child = () => {
  const { bears, increasePopulation, removeAllBears }: any = useStore();

  return (
    <div>
      <div>Child Component and bears: {bears}</div>
      <button onClick={ increasePopulation}>
        Agregar
      </button>
      <button onClick={ removeAllBears}>
        Reset
      </button>
    </div>
  )
}

export default Child;

