import {CityType} from "./02.2";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012, repaired: false, address:
                {number: 100, street: {title: "White street"}}
        },

            {
                buildedAt: 2008, repaired: false, address:
                    {number: 100, street: {title: "Happy street"}}
            },

            {
                buildedAt: 2020, repaired: false, address:
                    {number: 101, street: {title: "Happy street"}}
            }

        ],
        governmentBuildings: [{
            type: 'Hospital',
            budget: 3000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Sentral street',
                }
            }
        }],
        citizensNumber: 10000,
    }
})

test("test city should contains 3 houses", () => {
        expect(city.houses.length).toBe(3);


        expect(city.houses[0].buildedAt).toBe(2012);
        expect(city.houses[0].repaired).toBe(false);
        expect(city.houses[0].address.number).toBe(100);
        expect(city.houses[0].address.street.title).toBe("White street");


        // expect(city.houses[0].buildedAt).toBe(2008);
        // expect(city.houses[0].repaired).toBe(false);
        // expect(city.houses[0].address.number).toBe(100);
        // expect(city.houses[0].address.street.title).toBe("Happy street");
        //
        //
        //
        // expect(city.houses[0].buildedAt).toBe(2020);
        // expect(city.houses[0].repaired).toBe(false);
        // expect(city.houses[0].address.number).toBe(101);
        // expect(city.houses[0].address.street.title).toBe("Happy street");


    }
)

test("test city should hospital and fire station", () => {
        expect(city.governmentBuildings[0].type).toBe('Hospital');
        expect(city.governmentBuildings[0].budget).toBe(3000);
        expect(city.governmentBuildings[0].staffCount).toBe(200);
        expect(city.governmentBuildings[0].address.street.title).toBe('Sentral street');

    }
)