import React from "react";
import {userArray, usersObj} from "./07_01";
export type UserObj={
    id:number
    name:string
}
beforeEach(()=>{

})

test ("should select corresponding user from obj",()=>{
    expect (usersObj['1001'].name).toBe('Dima')
    // expect (usersObj[1]).toBe('Natasha')
    // expect (usersObj[2]).toBe('Valera')
    // expect (usersObj[3]).toBe('Katya')
})
test ("should select corresponding user from array",()=>{
    expect (userArray[0].name).toBe('Dima')
    // expect (usersObj[1]).toBe('Natasha')
    // expect (usersObj[2]).toBe('Valera')
    // expect (usersObj[3]).toBe('Katya')
})