import React from 'react';

interface IProps{
    hellos:string[]
}

const Hellos:React.FC<IProps> = ({hellos}) => {

    const Hellos = hellos.map((name,index)=>{
        return(
            <p key={index}>Hello {name}</p>
        )
    })
    return ( 
        <>
            {Hellos}
        </>
     );
}
 
export default Hellos;