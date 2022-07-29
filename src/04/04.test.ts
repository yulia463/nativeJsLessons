import {CourseType} from "./04";

test("should take ald men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14,];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses chipper 160", () => {
    const courses = [
        {title: "Css", price: 110},
        {title: "Js", price: 200},
        {title: "HTML", price: 150}
    ]


    const ages = [18, 20, 22, 1, 100, 90, 14,];

    const predicate = (course: CourseType) => {
        return course.price < 160;
    }

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("Css");
    expect(chipCourses[1].title).toBe("HTML");
})

test("get only completed task", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]
    let a=tasks[1].isDone;
    let b=!tasks[0].isDone;

    const uncompletedTasks=tasks.filter(task => task.isDone === false)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})
