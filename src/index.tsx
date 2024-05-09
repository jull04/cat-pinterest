import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { catApi } from "./utils/api"; 

// Создаем Redux-хранилище с помощью configureStore
const store = configureStore({
  reducer: {
    // Добавляем API в редьюсер
    [catApi.reducerPath]: catApi.reducer,
  },
  // Подключаем middleware для работы с API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // Обертываем приложение в Provider и передаем ему Redux-хранилище
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
