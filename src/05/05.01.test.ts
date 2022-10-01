import {ManType} from "./05.01";
import {createGreetingMessage} from "./05.01";
let people :Array<ManType>=[]

beforeEach(() => {
    people=[
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]
})

test ("should get array of greeting messenges" ,() =>{
    const messenges = createGreetingMessage(people);

    expect(messenges.length).toBe(3);
    expect(messenges[0]).toBe("Hello Andrew. Welcom to IT-Incobator");
    expect(messenges[1]).toBe("Hello Alexander. Welcom to IT-Incobator");
    expect(messenges[2]).toBe("Hello Dmitry. Welcom to IT-Incobator");


})