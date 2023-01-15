import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import AppHeader from './AppHeader';
import NavBar from './NavBar';
import SideBar from './SideBar';
import AppFooter from './AppFooter';
import AppContent from './AppContent';

const AppLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={<NavBar opened={opened} />}
      aside={<SideBar opened={opened} />}
      footer={<AppFooter />}
      header={<AppHeader open={opened} handleOpen={handleOpen} />}
    >
      <AppContent />
    </AppShell>
  );
};

export default AppLayout;
