import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Home from './pages/Home/Home.jsx';
import Shop from './pages/Shop/Shop.jsx';
import About from './pages/About/About.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import Journal from './pages/Journal/Journal.jsx';
import Login from './pages/Login/Login.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import store from './store';
import { Provider } from 'react-redux'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import AutoLayout from './components/AutoLayout/AutoLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AutoLayout />}

    >

        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop/product_details/:id' element={<ProductDetails />} />

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
