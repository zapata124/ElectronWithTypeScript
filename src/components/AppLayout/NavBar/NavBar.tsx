import { ReactElement } from 'react';
import { Navbar, Text } from '@mantine/core';
interface NavBarType {
  opened: boolean 
}
const NavBar: React.FC<NavBarType> = ({ opened }: NavBarType): ReactElement => {
  return (
    <Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Text>Application navbar</Text>
    </Navbar>
  );
};

export default NavBar;
