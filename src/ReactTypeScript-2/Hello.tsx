import React, { ChangeEventHandler } from 'react';

interface IProps{
    name:string;
    label?: string;
    onHappen:(name:string)=>void;
    handleChange:(e:React.ChangeEvent<HTMLInputElement> )=>void;
    
}

export const Hello:React.FC<IProps>=({name, label="my label",onHappen, handleChange})=>{

    return(
        <>
        <p>Hello {name}, {label}</p>
         {onHappen(name)}
         <input type="text" onChange={handleChange} />
        </>
    )
}