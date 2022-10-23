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
    books?: Array<string>
    skillLevels?: Array<number>
}
export type WithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}

type CompanyType ={id:number,title:string}


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
        books: u.books && [...u.books]
    }
    copy.books && copy.books.push(newBooks)
    return copy;
}


export function updateBook(u: UserWithLapTopType & UserWithBooksType, oldBook: string, newBooks: string) {
    const copy = {
        ...u,
        books: u.books && u.books.map(b => {
            if (b === oldBook) {
                return newBooks
            } else {
                return b
            }
        })
    }
    return copy;
}

export function updateSkill(u: UserWithLapTopType & UserWithBooksType, oldSkill: number, newSkill: number) {
    const copy = {
        ...u,
        skillLevels: u.skillLevels && u.skillLevels?.map(s => {
            if (s === oldSkill) {
                return newSkill
            } else {
                return s
            }
        })
    }
    return copy;
}

export function updateCompany(u: UserWithLapTopType & WithCompaniesType,
                              id: number, title: string) {
    const copy = {
        ...u,
        companies: u.companies.map(c => c.id === c.id ?
            {...c, title: title}
            : c
        )
    }
    return copy;
}

export const updateCompany2 = (companies: { [key:string]:Array<CompanyType> },
                               userName: string,
                               idCompany: number,
                               newTitle: string) => {
    let companyCopy={...companies}
    companyCopy [userName]=companyCopy[userName].map(c=>c.id===idCompany ?
        {...c,title:newTitle}:c
    )
    return companyCopy
}