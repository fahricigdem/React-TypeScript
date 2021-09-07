import React from 'react';

interface IProps{
    hellos:string[]
}

const Hellos:React.FC<IProps> = ({hellos}) => {
    
    const handleClick=(e:React.MouseEvent<HTMLParagraphElement>)=>{
        console.log(e.target, "clicked")
    }

    const handleDoubleClick=(index:number)=>{
        console.log("Element Index is ",index)
    }
    
    const Hellos = hellos.map((name,index)=>{
        return(
            <p key={index} onClick={handleClick} onDoubleClick={()=>handleDoubleClick(index)}>Hello {name}</p>
        )
    })
    
    return ( 
        <>
            {Hellos}
        </>
     );
}
 
export default Hellos;