import { combineReducers } from 'redux'; // Reducerを結合する
import { count } from './count';

export default combineReducers({ count }); // storeを作成する際に使用するのでexportする
