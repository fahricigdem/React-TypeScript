import React from 'react';
import { Hello } from './Hello';
import Hellos from './Hellos';
import Test from './test';

function App() {

    const sayName=(name:string)=>{
        console.log(name)
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement> )=>{
        console.log(e.target.value)
    }

    return(
        <>
        <Hello name="Fahri" onHappen={name=>console.log(name)} handleChange={handleChange}/>
        <Hello name="Onur" onHappen={sayName} handleChange={handleChange}/>
        
        <hr />
        <Hellos hellos={["Ali","Veli","Robert","John"]} />
        <Test/>
        </>
    )
};
export default App 