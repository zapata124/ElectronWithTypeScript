import { ReactElement } from 'react';
import { Navbar, Text } from '@mantine/core';
interface NavBarType {
  opened: boolean 
}
const NavBar: React.FC<NavBarType> = ({ opened }: NavBarType): ReactElement => {
  return (
    <Navbar  hidden={opened} width={{ sm: opened? 200 : 65, lg: opened? 300 : 65 }}>
      {/* <Text>Application navbar</Text> */}
    </Navbar>
  );
};

export default NavBar;
