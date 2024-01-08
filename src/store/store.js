import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";    // 비동기 = 미들웨어
import rootReducer from "../reducers/index";  // 모아둔 reducer를 루트로 잡기
import {createLogger} from "redux-logger/src";  // 에러 확인용

const logger=createLogger()
const middleware=[thunk,logger]
const store=configureStore({
    reducer:rootReducer,
    middleware:middleware,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   // 크롬의 리덕스 로고를 확인하기 위해 넣기
})
export default store;