import { configureStore } from "@reduxjs/toolkit";
import information from './slices/information.slice.js'

export default configureStore({
    reducer:{information}
})


