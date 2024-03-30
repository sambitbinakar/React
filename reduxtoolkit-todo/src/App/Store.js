import {configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todoslice'

export const Store = configureStore({
    reducer: todoReducer
});