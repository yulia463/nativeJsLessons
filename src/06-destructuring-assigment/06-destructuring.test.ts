 export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}
export let man: ManType;
beforeEach(() => {
    man = {
        name: 'Semen',
        age: 26,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'novaya 1'
            }
        }
    }
})


//вместо двух строк пишем всё в одну ниже
// const age=man.age;
// const lessons= man.lessons;
test('test', () => {
    let {age, lessons} = man

    const {title} = man.address.street

    expect(age).toBe(26);
    expect(lessons.length).toBe(2);
    expect(title).toBe('novaya 1');
})
 test('' ,()=>{
    let l1=man.lessons[0];
     let l2=man.lessons[1];

     const [ls1,ls2]=man.lessons;
     expect(l1.title).toBe('1')
     expect(l2.title).toBe('2')

     expect(ls1.title).toBe('1')
     expect(ls2.title).toBe('2')
 })




