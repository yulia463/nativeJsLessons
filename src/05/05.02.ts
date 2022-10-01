import {CityType, GovernmentBuildingType, HouseType, StreetType} from "../02/02.2";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New Yourk",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100, street: {title: "White street"}
                }
            }
        ],
        governmentBuildings:[
            {
                type:'fair station',
                budget:5,
                staffCount:59,
                address:{
                    street:{
                        title: 's station'
                    },
                }
            }
        ],
        citizensNumber:20

    }
});



export const getStreetsTitlesOfGovernmentsBuildings =(governmentBuildings:Array<GovernmentBuildingType>) =>{
    return governmentBuildings.map( b => b.address.street.title)
}

test("list of street titles of goverments buldings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings);


    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("south Str")});


test ("list of streets titles" ,()=>{
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy Street")
    expect(streets[2]).toBe("Happy Street")



})
export const getStreetsTitlesOfHouses =(houses:Array<HouseType>) =>{
    return houses.map( b => b.address.street.title)
}
export function createMessages (houses:Array<HouseType>){
    let callbackfn=(h:HouseType)=>{
        return `Hello guys from ${h.address.street.title}`
    }
    let newArray=houses.map(callbackfn)
    return newArray
}


test ("create greeting messages for streets", () =>{
 let messages=  createMessages(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from White street")
    expect(messages[2]).toBe("Hello guys from White street")
})