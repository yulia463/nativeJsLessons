export type UserType={
    name:string
    hair:number
    address:{city:string,house?:number}
}

export type LapTopType={
    title:string
}

export type UserWithLapTopType= UserType&{
    laptop:LapTopType
}
export function makeHairstyle(u:UserType,power:number){
    const copy={
        ...u
    }
    copy.hair=u.hair / power
    u.hair=u.hair / power
    return copy
}
export function moveUser(l:UserWithLapTopType,city:string){
    const copy={
        ...l,
    }
    copy.address ={
        ...copy.address,
        city:city
    }
   return copy
}