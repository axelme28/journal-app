import React from "react";
import { Provider } from "react-redux";

import { AppRoutes } from "./routers/App.Routes";
import store from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
};

export default App;
