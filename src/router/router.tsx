import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/AppLayout'
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // children: [
    //   {
    //     path: 'team',
    //     element: <Team />,
    //   },
    // ],
  },
]);

export default router;
