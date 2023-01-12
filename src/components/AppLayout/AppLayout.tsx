import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import AppHeader from './AppHeader';
import NavBar from './NavBar';
import SideBar from './SideBar';
import AppFooter from './AppFooter';

const AppLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={<NavBar />}
      aside={<SideBar />}
      footer={<AppFooter />}
      header={<AppHeader />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
};

export default AppLayout;
