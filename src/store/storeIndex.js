import { createSlice , configureStore} from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name : 'counterSlice',
  initialState : initialCounterState , 
  reducers : {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementByAmount(state , action){
      state.counter = state.counter + action.payload
    },
    counterShowToggeler(state){
      state.showCounter = !state.showCounter
    }
  }
})

const initialAuthState = { isLoggedIn : true}

const authSlice = createSlice({
  name : 'auth' , 
  initialState : initialAuthState ,
  reducers : {
    loginHandler(state){
      state.isLoggedIn = true
    },
    logoutHandler(state){
      state.isLoggedIn = false
    }
  }
})

const store = configureStore({
  reducer : {counter : counterSlice.reducer , auth : authSlice.reducer}
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store;
