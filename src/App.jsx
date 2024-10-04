import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
   
    if(buttonText==="C"){
      setCalVal("");
    }
    else if(buttonText==="="){
        const result=eval(calVal);
        setCalVal(result);
    }else{
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div classNameNameName={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
      <div classNameNameName={styles.name}>Made by Kirti Wardhan Singh with ❤️</div>
    </>
  );
}

export default App;
