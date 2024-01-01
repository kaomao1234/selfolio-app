import { configureStore } from '@reduxjs/toolkit'
import navbar_management, { navBarManagementSlice } from './feature/navbar_management';
export const store = configureStore({
    reducer:{
        navBarManagement:navbar_management
    }
});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch