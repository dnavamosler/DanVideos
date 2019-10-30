import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Loading from "./src/sections/components/loading";
import AppLayout from "./src/app";
export default function App() {
  //existe un if virtual en native para cambiar de plataforma

  // Platform.select({
  // ios: 'valor',
  // android: 'valor'
  // })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <AppLayout store={store} />
      </PersistGate>
    </Provider>
  );
}
