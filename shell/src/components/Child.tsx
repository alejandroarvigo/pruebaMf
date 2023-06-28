import React, { Suspense } from "react";
import { useEffect } from "react";

//@ts-ignores
const CustomButton = React.lazy(() => import('menu/CustomButton'));

const Child = () => {

  return (
    <Suspense fallback={<div>loading...</div>}>
      <CustomButton store={{logFunction: ()=> {console.log('Llega por parameters desde el host')}}}/>
    </Suspense>

  );
}

export default Child;

