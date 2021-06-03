export const sum = (a: number, b: number): number => {
    return a + b
}

export const rest = (...numbers: Array<number>) => {
    return numbers.reduce((acc, el) => acc + el)
}


export const mult = (a: number, b: number): number => {
    return a * b
}
export const div = (a: number, b: number): number => {
    return a / b
}
export const sub = (a: number, b: number): number => {
    return a - b
}



/*export type ActionType = "sum" | "mult" | "div" | "sub"

export const calculator = (a: number, b: number, action: ActionType) => {
    switch (action) {
        case "sum":
           return a + b
        case "mult":
            return a * b
        case "div":
            return a / b
        case "sub":
            return a - b
        default:
            return new Error("Unknown action")
    }
}*/

export type ActionType = { type: "sum" | "mult" | "div" | "sub" }
export const calculator = (a: number, b: number, action: ActionType) => {
    switch (action.type) {
        case "sum":
           return a + b
        case "mult":
            return a * b
        case "div":
            return a / b
        case "sub":
            return a - b
        default:
            return new Error("Unknown action")
    }
}


export type StudentType = {
    name: string
    isMarried: boolean
    friends: Array<string>
}

export const addFriends = (students: Array<StudentType>): Array<StudentType> => {
    return students.map(st => ({
            ...st,
            friends: students.map(st => st.name).filter(n => n !== st.name)
        }))

    //return students.map(st => ({
    // ...st,
    // friends: students.filter(fst => fst.name !== st.name).map(mst => mst.name)
    // }))
}


