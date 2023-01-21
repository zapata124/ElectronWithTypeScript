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
        element: <Navigate to={'Content'} />,
      },
      {
        path: 'Content',
        element: <Outlet />,
        children: [
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
