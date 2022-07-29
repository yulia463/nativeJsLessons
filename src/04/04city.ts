import {CityType} from "../02/02.2";

export function demoLishHousesOnTheStreet(city: CityType, street: string){
city.houses = city.houses.filter( h => h.address.street.title !== street)
}

