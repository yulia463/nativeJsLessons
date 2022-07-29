import {CityType} from "../02/02.2";
import {addMoneyToBudget, doesStudentLiveIn, repairHouse, toFireStaff, toHireStaff} from "./03";
import {demoLishHousesOnTheStreet} from "../04/04city";


let city: CityType;

beforeEach(() => {
    city ={
        title:"New York",
        houses:[
            {
                id:1, buildedAt:2012, repaired:false,address:
                {number:100 , street:{title:"White street"}}},

            { id:2, buildedAt:2008, repaired:false,address:
                    {number:100 , street:{title:"Happy street"}}},

            { id:3, buildedAt:2020, repaired:false,address:
                    {number:101 , street:{title:"Happy street"}}}

            ],
        governmentBuildings: [
            {
            type: 'Hospital' ,
            budget:3000,
            staffCount:200,
            address: {
                street:{
                    title:'Sentral street',
                }
            }
        },
            {
                type: 'Fire station' ,
                budget:500000,
                staffCount:200,
                address: {
                    street:{
                        title:'Fire street',
                    }
                }
            },
        ],
        citizensNumber: 10000,
    }
    })

test("budget should be changed for hospital" ,()=>{
    addMoneyToBudget(city.governmentBuildings, 'Hospital', 100000)

    expect(city.governmentBuildings[0].budget).toBe(103000);
    expect(city.governmentBuildings[1].budget).toBe(500000);


})

test("house should ber repaired" ,()=>{
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy();

})

test("staff should be decreased" ,()=>{
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180);

})

test("staff should be increased" ,()=>{
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220);

})

test("Houses shouild be destroyed",() =>{
    demoLishHousesOnTheStreet(city ,"Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

