export function icreaseAge(u: UserType) {
    u.age++;
}


type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Yulia',
        age: 23,
        address: {
            title: 'Minsk'
        }
    }

    icreaseAge(user);

    expect(user.age).toBe(24);
    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
})


test('array reference test', () => {
    let users = [
        {
            name: 'Yulia',
            age: 23
        },
        {
            name: 'Semen',
            age: 26
        }
    ]

    let admin = users;
    admin.push({name: 'Vasja', age: 10})

    expect(users[2]).toEqual({name: 'Vasja', age: 10});


})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;
    adminsCount = 101;

    //
    // expect(users[2]).toEqual({name: 'Vasja', age: 10});


})
test('reference type test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Yulia',
        age: 23,
        address: address
    }


    let addr = user.address
    let user2: UserType = {
        name: 'Klava',
        age: 30,
        address: addr
    }
    user2.address.title = 'Kanary';

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe('Kanary');
})
//array
test('reference array test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Yulia',
        age: 23,
        address: address
    }
    let addr = user.address

    let user2: UserType = {
        name: 'Klava',
        age: 30,
        address: addr
    }

    const users = [user, user2, {name: 'yo', age: 12, address: address}]

    const admins=[user,user2];

    admins[0].name='KOKA'

    expect(users[0].name).toBe('KOKA');

})

test('sort array test ',()=>{

    const letters=['c','d','a','z','e']
    letters.sort();


    expect(letters).toEqual(['a','c','d','e','z'])
});


