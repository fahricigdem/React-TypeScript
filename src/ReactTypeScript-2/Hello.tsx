import React from 'react';

interface IProps{
    name:string
}

export const Hello:React.FC<IProps>=({name})=>{
    return(
        <p>Hello {name}</p>
    )
}