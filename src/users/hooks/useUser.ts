import { UserId, deleteUserById } from "../store/users/slices";
import { useAppDispatch } from "../../services/store/store";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }
    return { removeUser }
};