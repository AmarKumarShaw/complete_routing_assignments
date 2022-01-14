import React,{useState} from 'react'

interface IProps{
    name?:string,
}

const Input = (props:IProps) => {
    const [checked,toggleButton] =  useState(false);
    return (
        <div>
            <input type="text" 
            checked={checked}
            onClick={(e:any) => toggleButton(e.target.checked)}
            />
        </div>
    )
}

export default Input;
