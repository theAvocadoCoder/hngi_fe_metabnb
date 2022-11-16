import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Error';
import App from './routes/App';
import PlaceToStay from './routes/PlaceToStay';
import Root from './routes/Root';
import  'normalize.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/place-to-stay",
        element: <PlaceToStay />,
      }
    ],
  },
], {basename: "/hngi_fe_metabnb"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
