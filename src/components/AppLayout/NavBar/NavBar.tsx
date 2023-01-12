import { ReactElement } from 'react';
import { Navbar, Text } from '@mantine/core';

const NavBar = (): ReactElement => {
  return (
    <Navbar p='md' hiddenBreakpoint='sm' hidden={undefined} width={{ sm: 200, lg: 300 }}>
      <Text>Application navbar</Text>
    </Navbar>
  );
};

export default NavBar;
