import React from 'react';
import { Hello } from './Hello';
import Hellos from './Hellos';

function App() {

    const sayName=(name:string)=>{
        console.log(name)
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement> )=>{
        console.log(e.target.value)
    }

    return(
        <>
        <Hello name="Damen" onHappen={name=>console.log(name)} handleChange={handleChange}/>
        <Hello name="Herren" onHappen={sayName} handleChange={handleChange}/>
        <hr />
        <Hellos hellos={["Ali","Veli","Robert","John"]} />
        </>
    )
};
export default App 