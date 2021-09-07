import React from 'react';
import Counter from './Counter';


function App() {
    return(
        <>
            <Counter>
                {({count,setCount})=>(
                    <>
                        <div>{count}</div>
                        <button onClick={()=>setCount(count+1)}>Increment</button>
                    </>
                )}
            </Counter>

        </>
    )
};
export default App 