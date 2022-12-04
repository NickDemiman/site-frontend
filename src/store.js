import { configureStore } from '@reduxjs/toolkit'

const DEBUG = process.env.NODE_ENV === "development" ? true : false;

export const host = () => {
    if (DEBUG) return 'http://localhost:8000';
    return 'http://localhost';
}


configureStore({
  reducer: {},
})

export {configureStore};