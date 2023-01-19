import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Drawer, SideBar, Header, Footer } from './components';
import AppLayout from './components/AppLayout';

import router from './router'
const App = () => {
  return (
    // <>
    //   <Header
    //     user={{
    //       name: '',
    //       image: '',
    //     }}
    //     tabs={[]}
    //   />
    //   <SideBar />
    //   <Footer />
    // </>
    // <AppLayout />
    <RouterProvider router={router} />
  );
};

export default App;
