import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import AppHeader from './AppHeader';
import NavBar from './NavBar';
import SideBar from './SideBar';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import { Outlet, Navigate } from 'react-router-dom';
import { ToggleProvider } from '../../providers/ToggleProvider';

const AppLayout = () => {
  const theme = useMantineTheme();

  return (
    <ToggleProvider>
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
        <Outlet />
      </AppShell>
    </ToggleProvider>
  );
};

export default AppLayout;
