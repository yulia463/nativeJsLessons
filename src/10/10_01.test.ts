import {
    addNewBooksToUser,
    moveUser,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLapTopType
} from "./10_01";

function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u
    }
    copy.hair = u.hair / power
    u.hair = u.hair / power
    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Yulia',
        hair: 24,
        address: {
            city: 'Alta'
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(12)
    expect(awesomeUser.address).toBe(user.address)


})


test('change address', () => {
    let user: UserWithLapTopType = {
        name: 'Yulia',
        hair: 24,
        address: {
            city: 'Alta',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }
    const movedUser = moveUser(user, 'Kiev');


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')


})


test('upgrade laptop to macbook', () => {
    let user: UserWithLapTopType = {
        name: 'Yulia',
        hair: 24,
        address: {
            city: 'Alta',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }
    const macbook = upgradeUserLaptop(user, 'macbook');


    expect(user).not.toBe(macbook)
    expect(user.address).toBe(macbook.address)
    expect(user.laptop).not.toBe(macbook.laptop)
    expect(macbook.laptop.title).toBe('macbook')
    expect(user.laptop.title).toBe('ZenBook')


})

test('upgrade laptop to macbook', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Yulia',
        hair: 24,
        address: {
            city: 'Alta',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const macbook = moveUserToOtherHouse(user, 99);


    expect(user).not.toBe(macbook)
    expect(user.books).toBe(macbook.books)
    expect(user.laptop).toBe(macbook.laptop)
    expect(user.address).not.toBe(macbook.address)
    expect(user.address.house).toBe(99)

})

test('add new books to user', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Yulia',
        hair: 24,
        address: {
            city: 'Alta',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const macbook = addNewBooksToUser(user, 'ts');


    expect(user).not.toBe(macbook)
    expect(user.laptop).toBe(macbook.laptop)
    expect(user.address).toBe(macbook.address)
    expect(user.books).not.toBe(macbook.books)
    expect(macbook.books[4]).toBe('ts')

})