import { ReactElement } from 'react';
import { Grid, Navbar, Text, Tooltip, UnstyledButton } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons';
interface NavBarType {
  opened: boolean;
}
const sideBarIcons = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];
const NavBarClosedGrid = ({ children, opened }: any) => {
  return (
    <Grid.Col xs={opened ? 2 : 12} sx={{ backgroundColor: 'blue' }}>
      {children}
    </Grid.Col>
  );
};
const NavBarOpenedGrid = ({ children }: any) => {
  return (
    <Grid.Col xs={10} sx={{ backgroundColor: 'yellow' }}>
      {children}
    </Grid.Col>
  );
};
const SideBarIcons = ({ sideMenuIcons }: any) => {
  return sideMenuIcons.map((icon: any) => (
    <Tooltip label={icon.label} position='right' withArrow transitionDuration={0} key={icon.label}>
      <UnstyledButton
      // onClick={() => setActive(link.label)}
      // className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <icon.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));
};

const NavBar: React.FC<NavBarType> = ({ opened }: NavBarType): ReactElement => {
  return (
    <Navbar hidden={opened} width={{ sm: opened ? 200 : 65, lg: opened ? 300 : 65 }}>
      <SideBarIcons sideMenuIcons={sideBarIcons} />
    </Navbar>
  );
};

export default NavBar;
