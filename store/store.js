import { createStore } from "redux";
import reducer from "../reducers/video";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: []
// });
const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
