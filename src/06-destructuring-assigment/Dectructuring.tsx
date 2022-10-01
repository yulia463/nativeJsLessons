import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}


export type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }


}


function useYuliaState(m:string){
    return[m,function (){}]
}

function useYuliaState2(m:string){
    return {
        message: m,
        setMessage:function (){}
    }
}
const [message,setMassage]=useState<string>('hello')

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {



    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}
        </div>

    </div>
}
