import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {  FoodId, FoodWithId } from "../../domain/model";
import { FoodRepository } from "../data_source/dataSourceImplementation";

const foodRepo = FoodRepository.getInstance('https://api.example.com');
const DEFAULT_STATE: FoodWithId[] = [
    {
        id: "1",
        foodName: "burger",
        profit: 2000,
        productionCost: 2000,
        description: "good food",
        foodType: "meal"
    }
]

const initialState: FoodWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__food")
    if (persistedState) {
        return JSON.parse(persistedState).users
    }
    return DEFAULT_STATE;
})();
export const foodsSlice = createSlice({
    name: 'foods',
    initialState: initialState,
    reducers: {
        deleteFoodById: (state, action: PayloadAction<FoodId>) => {
            const id = action.payload;
            return state.filter((food) => food.id != id)
        },
        createFood: (state, action: PayloadAction<FoodWithId>) => {
            console.log(state)
            foodRepo.createFood(action.payload);
        }
    }
})

export default foodsSlice.reducer

export const { deleteFoodById } = foodsSlice.actions