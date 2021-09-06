import React from 'react';
import { Hello } from './Hello';
import Hellos from './Hellos';

function App() {
    return(
        <>
        <Hello name="Leute"/>
        <Hellos hellos={["Ali","Veli","Robert","John"]} />
        </>
    )
};
export default App 