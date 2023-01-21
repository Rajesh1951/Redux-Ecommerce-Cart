import { configureStore } from "@reduxjs/toolkit";
import {custom1} from '../redux/reducers'
const store = configureStore({
  reducer: {
    creducer: custom1
  }
})

export default store;