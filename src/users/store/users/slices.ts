import { createSlice, type  PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
    name: string,
    email: string,
    github: string,
}

export interface UserWithId extends User {
    id: string
}

const DEFAULT_STATE: UserWithId[] = [
    {
        id: "1",
        name: "pepe",
        email: "pepe@gmail.com",
        github: "manucastelnovo"
    },
    {
        id: "2",
        name: "manu",
        email: "manu@gmail.com",
        github: "manucastelnovo"
    },
    {
        id: "3",
        name: "pibe",
        email: "pibe@gmail.com",
        github: "manucastelnovo"
    }
]

const initialState: UserWithId[] = (()=>{
    const persistedState= localStorage.getItem("__redux__state__")
    if(persistedState){
        return JSON.parse(persistedState).users
    }
    return DEFAULT_STATE;
})();
export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        deleteUserById: (state, action:PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id != id)
        }
    }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions