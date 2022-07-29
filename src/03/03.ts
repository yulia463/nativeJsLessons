// debugger
//
// export const sum = (a: number, b: number) => {
//     return a + b;
// }
//
// const res=sum(sum(2,3),sum(1,2))
import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02.2";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}
export const addMoneyToBudget = (governmentBuildings: Array<GovernmentBuildingType>, title: string, newBudget: number) => {
    for (let i = 0; i < governmentBuildings.length; i++) {
        if (governmentBuildings[i].type === title) {
            governmentBuildings[i].budget += newBudget
        }

    }
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (Building: GovernmentBuildingType, count: number) => {
    Building.staffCount -= count;
}

export const toHireStaff = (Building: GovernmentBuildingType, count: number) => {
    Building.staffCount += count ;
}