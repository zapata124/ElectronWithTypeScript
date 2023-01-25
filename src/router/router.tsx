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
                'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=DEMO_KEY&fuel_type=all,ELEC&state=NY&limit=2',
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
