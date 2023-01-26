import React from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import AppContent from '../components/AppLayout/AppContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to={'Content/home'} />,
      },
      {
        path: 'Content/',
        element: <Outlet />,
        children: [
          {
            path: 'home',
            element: <AppContent />,
            loader: async ({ params }) => {
              const data = await fetch(
                'https://api.eia.gov/v2/crude-oil-imports/data/?api_key=GZD3mdbCqdHogvV01caMedoegYivnpkd6X4FxGyQ&frequency=monthly&data[0]=quantity&start=2022-01&end=2022-06&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000',
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              );
              const dataJson = await data.json();
              console.log({ dataJson });
              return dataJson
            },
          },
          {
            path: ':id',
            element: <AppContent />,
          },
        ],
      },
    ],
  },
]);

export default router;
