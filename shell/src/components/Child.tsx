import React from "react";
import { useEffect } from "react";
import { useGetShellContext } from "../store";

const Child = () => {
    const { logFunction } = useGetShellContext();
  
    useEffect(() => {
      console.log('CHILD**********************')  
      logFunction(); // Debería imprimir "Saludos desde el hostingg"
      console.log('CHILD**********************')  
    }, []);
  
    return <div>Child Component</div>;
}
 
export default Child;

