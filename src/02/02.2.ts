export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType

}
export type HouseType = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingType = {
    type:string,
    budget:number,
    staffCount:number,
    address:{
        street:StreetType,
    }
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number

}

