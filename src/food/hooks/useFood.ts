
import { useAppDispatch } from "../../hooks/store";
import { FoodId, deleteFoodById } from "../store/foods/slices";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id: FoodId) => {
        dispatch(deleteFoodById(id))
    }
    return { removeUser }
};