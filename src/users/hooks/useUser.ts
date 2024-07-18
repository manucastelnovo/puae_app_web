import { UserId, deleteUserById } from "../store/users/slices";
import { useAppDispatch } from "../../hooks/store";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }
    return { removeUser }
};