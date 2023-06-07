import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import MyBookings from './pages/MyBookings/MyBookings.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: 'my-bookings',
        element: <MyBookings></MyBookings>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
