import {addFriends, calculator, rest, StudentType, sum} from "./tasks";

test.bind("sum of two number", () => {
    const a: number = 10
    const b: number = 8

    const result = sum(a, b)

    expect(result).toBe(18)
    //expect(sum(10, 8)).toBe(18)
})

test.bind() ("sum of several number", () => {
    expect(rest(10, 8)).toBe(18)
    expect(rest(10, 8, 12)).toBe(30)
    expect(rest(10, 8, 6, 6, 10, 24)).toBe(64)
})



/*test ("calculator", () => {
    expect(calculator(2, 3, "sum")).toBe(5)
    expect(calculator(2, 3, "mult")).toBe(6)
    expect(calculator(3, 2, "div")).toBe(1.5)
    expect(calculator(2, 3, "sub")).toBe(-1)
})*/

test.bind() ("calculator", () => {
    expect(calculator(2, 3, {type: "sum"})).toBe(5)
    expect(calculator(2, 3, {type: "mult"})).toBe(6)
    expect(calculator(3, 2, {type: "div"})).toBe(1.5)
    expect(calculator(2, 3, {type: "sub"})).toBe(-1)
})



test.bind() ("student add friends", () => {
    const students: StudentType[] = [
        {name: "Bob", isMarried: true, friends: []},
        {name: "Alex", isMarried: true, friends: []},
        {name: "Nick", isMarried: false, friends: []},
        {name: "Bob", isMarried: false, friends: []}
    ]

    const studentsWithFriends = addFriends(students)

    expect(studentsWithFriends[1].isMarried).toBe(true)

    expect(studentsWithFriends[0].friends.length).toBe(2)
    expect(studentsWithFriends[1].friends.length).toBe(3)

    expect(studentsWithFriends[2].friends[0]).toBe("Bob")
    expect(studentsWithFriends[2].friends[2]).toBe("Bob")
    expect(studentsWithFriends[3].friends[0]).toBe("Alex")
})







