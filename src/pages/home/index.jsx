import { useState } from "react";
import ButtonComponent from "../../components/button/button";

const HomePage = () => {
  const [number, setNumber] = useState(0);
  const clickNum = () => {
    setNumber(number + 1);
  };
 
const clickNum2 =() =>{
    if(number>0){
    setNumber(number-1)
}}

  return (
    <>
      <div>
        <div>Number: {number}</div>
        <div>
          <ButtonComponent onClickNum={clickNum} label={"increase"} />
          <ButtonComponent onClickNum={clickNum2} label={"decrease"} />
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
