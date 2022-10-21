export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LapTopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LapTopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u
    }
    copy.hair = u.hair / power
    u.hair = u.hair / power
    return copy
}

export function moveUser(l: UserWithLapTopType, city: string) {
    return {
        ...l,
        address: {
            ...l.address,
            city: city
        }
    }

}

export function moveUserToOtherHouse(u: UserWithLapTopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }

}

export function upgradeUserLaptop(u: UserWithLapTopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }

}


export function addNewBooksToUser(u: UserWithLapTopType & UserWithBooksType, newBooks: string) {
    const copy = {
        ...u,
        books: [...u.books]
    }
    copy.books.push(newBooks)
    return copy;
}