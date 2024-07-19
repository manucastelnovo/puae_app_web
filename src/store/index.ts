import { configureStore,createListenerMiddleware } from "@reduxjs/toolkit";
import usersReducer, { deleteUserById } from '../users/store/users/slices'
import foodsReducer from '../food/data/store/slices'

// const persistanceLocalStorageMiddleware = (store)=> (next)=> (action)=>{
//     console.log(store.getState())
//     next(action)
//     localStorage.setItem("__redux__state__",JSON.stringify(store.getState()));
// }

const listenerMiddleware = createListenerMiddleware()

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
listenerMiddleware.startListening({
  actionCreator: deleteUserById,
  effect: async (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here
    console.log('Todo added: ', action.payload.toString())
    localStorage.setItem("__redux__state__",JSON.stringify(listenerApi.getState()));
    // Can cancel other running instances
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