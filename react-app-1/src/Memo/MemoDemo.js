import { useMemo, useState, pure } from "react"
import Counter1 from "../RenderProps/Counter1";

const MemoDemo = ()=>{

   const [counter1, SetCounter1] = useState(0);
   const [span, SetSpan] = useState(0);
   const [counter2, SetCounter2] = useState(0);

   const increment = ()=>{
       SetCounter1(counter1+1);
   }
   const increment2 = ()=>{
    SetCounter2(counter2+1);
    }
   

   const isEven = useMemo(()=>{
       let i = 0;
       while(i < 2000000000){
        i++;
       }
       return counter1 % 2 == 0;
         
   }, [counter1]);

    return (
        <>
            <div>
                <button onClick={increment} >Counter 1 clicked {counter1} times</button>
                <span>{isEven ? "EVEN" : "ODD"}</span>
            </div>
            <div>
                <button onClick={increment2} >Counter 2 clicked {counter2} times</button>
            </div>
        </>
    )
}

export default MemoDemo;