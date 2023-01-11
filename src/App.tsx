import React from 'react';
import { Drawer, SideBar, Header, Footer } from './components';
const App = () => {
  return (
    <>
      <Header
        user={{
          name: '',
          image: '',
        }}
        tabs={[]}
      />
      <SideBar />
      <Footer />
    </>
  );
};

export default App;
