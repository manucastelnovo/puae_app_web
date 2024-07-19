
import { useAppDispatch } from "../../../hooks/store";
import { FoodId } from "../../domain/model";
import {  deleteFoodById } from "../../data/store/slices";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id: FoodId) => {
        dispatch(deleteFoodById(id))
    }
    return { removeUser }
};