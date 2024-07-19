import { configureStore,createListenerMiddleware } from "@reduxjs/toolkit";
import usersReducer, { deleteUserById } from '../../users/store/users/slices'
import foodsReducer from '../../food/data/store/slices'


const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: deleteUserById,
  effect: async (action, listenerApi) => {
    console.log('Todo added: ', action.payload.toString())
    localStorage.setItem("__redux__state__",JSON.stringify(listenerApi.getState()));
    listenerApi.cancelActiveListeners()
    }
  })

  
export const store = configureStore({
    reducer: {
        users:usersReducer,
        foods:foodsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch