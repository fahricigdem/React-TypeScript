import * as React from 'react';
import { useState } from 'react';


interface CounterProps {
    children:(data:{
        count:number, setCount:React.Dispatch<React.SetStateAction<number>> 
    })=>JSX.Element|null
}
 
const Counter: React.FC<CounterProps> = ({children}) => {
    const [count,setCount]=useState(0)
    return ( 
        <div>
            {children({count,setCount})}
        </div>
     );
}
 
export default Counter;