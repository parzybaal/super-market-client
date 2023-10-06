export interface User {
    id: string
    name: string
    last_name: string
    age: number
    email: string
    auth: boolean
}

export interface UserState {
    user: User | null
}