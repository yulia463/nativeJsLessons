import {moveUser, UserType, UserWithLapTopType} from "./10_01";

function makeHairstyle(u:UserType,power:number){
    const copy={
        ...u
    }
    copy.hair=u.hair / power
    u.hair=u.hair / power
    return copy
}

test ('reference type test' ,()=>{
    let user :UserType={
        name:'Yulia',
        hair:24,
        address:{
            city:'Alta'
        }
    }
   const  awesomeUser=makeHairstyle(user,2)

    expect(user.hair).toBe(12)
    expect(awesomeUser.address).toBe(user.address)


})



test ('change address' ,()=>{
    let user :UserWithLapTopType={
        name:'Yulia',
        hair:24,
        address:{
            city:'Alta',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }

    }
    const movedUser = moveUser(user, 'Kiev');


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')


})