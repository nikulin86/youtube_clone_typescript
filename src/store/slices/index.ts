import { combineReducers, configureStore } from "@reduxjs/toolkit";
import videoReducer from './videoSlice'

const rootReducer = combineReducers({
    youtubeApp: videoReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];