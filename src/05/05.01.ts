export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransfoemator = (man: ManType) => {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split("")[0],
        lastName: man.name.split("")[1],
    }
}

const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]

const dev2 = [
    dimychTransfoemator(people[0]),
    dimychTransfoemator(people[1]),
    dimychTransfoemator(people[2]),
]

const devs3 = people.map(dimychTransfoemator)
const devs4 = people.map(man => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split("")[0],
    lastName: man.name.split("")[1],
}))


const messenges = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incobator`)

export const createGreetingMessage = (people:Array<ManType>) => {
  return   people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incobator`)


}