import { ReactElement } from 'react';
import { Footer } from '@mantine/core';

const AppFooter: React.FC = (): ReactElement => {

  return (
    <Footer height={60} p='md'>
      Application footer
    </Footer>
  );
};

export default AppFooter;
