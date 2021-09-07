import React, { useState } from 'react';

interface IProps{
    name:string;
    label?: string;
    onHappen:(name:string)=>void;
    handleChange:(e:React.ChangeEvent<HTMLInputElement> )=>void;
    
}

interface ICity{
    cityName:string;
    cityCode?:number
}

export const Hello:React.FC<IProps>=({name, label="my label",onHappen, handleChange})=>{
    
    const [user, setUser]=useState<string | number |null >(name)

    const [player, setPlayer]=useState<{name:string|number, age:number}>({name:"Robert", age:23})


    const [city,setCity]=useState<ICity>({cityName:"Hannover"})
    
    const handleUser=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(e.target.value)
    }
    
   
    return(
        <>
        <p>Hello {name}, {label}, user: {user}</p>
         {onHappen(name)}
         <input type="text" onChange={handleChange} />
         <hr />
         <input type="text" onChange={handleUser} />
         <p>{player.name}:{player.age}</p>
         {player.name==="Robert" && <button onClick={()=>setPlayer({name:"ali",age:34})}>Change Player</button>}

         <p>{city.cityName}</p>
         <br /><br />
        </>
    )
}