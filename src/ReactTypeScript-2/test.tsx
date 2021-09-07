import * as React from 'react';
import { useRef } from 'react';

interface Props {
    
}
 
const Test: React.FunctionComponent<Props> = () => {

    const [value,setValue]=React.useState({a:"aaa"})
    
    console.log(value)
    
    const inputRef=useRef<HTMLInputElement | null>(null)

    const pRef=useRef<null | HTMLParagraphElement>(null)
    
    const renderCount=useRef<number>(0)
    renderCount.current=renderCount.current+1
    console.log(renderCount.current)

    console.log(inputRef.current)
    console.log(inputRef.current?.value)
    console.log(pRef.current)
    console.log(pRef.current?.textContent)



    return ( 
        <div style={{backgroundColor:"grey"}}>
        <p onClick={()=>setValue({a:"bbb"})} ref={pRef}>click here</p>
        <input type="text" ref={inputRef} />

        <div>Render Count of test component: {renderCount.current}</div>
        </div>
     );
}
 
export default Test;