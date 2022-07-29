const age = [18, 20, 22, 1, 100, 90, 14,];
export const predicate = (age: number) => {
    return age > 90;
}


export const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}
     const courses = [
    {title: "Css", price: 110},
    {title: "Js", price: 200},
    {title: "HTML", price: 150}
]
 const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

export const chipCourses = [
    {title: "Css", price: 110},
    {title: "HTML", price: 150},
];


