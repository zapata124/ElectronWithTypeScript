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
import { MenuComponent, MenuComponentReusable } from '../../MenuComponent';
import { useToggle } from '../../../providers/ToggleProvider';
const sideBarIcons = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

const NavBarOpenedGrid = () => {
  return <Grid.Col xs={10}>ss</Grid.Col>;
};

const NavBarClosedGrid = ({ children, opened }: any) => {
  console.log({ opened });
  return (
    <>
      <Grid.Col xs={opened ? 4 : 12} sx={{ paddingLeft: 26 }}>
        {children}
      </Grid.Col>
    </>
  );
};

const SideBarIcons = ({ sideMenuIcons, opened }: any) => {
  return (
    <Grid sx={{ paddingTop: 20 }}>
      {sideMenuIcons.map((icon: any, index: number) => {
        return (
          <>
            <NavBarClosedGrid key={`nav-${index}`} opened={opened}>
              <Tooltip
                label={icon.label}
                position='right'
                withArrow
                transitionDuration={0}
                key={icon.label}
              >
                <UnstyledButton
                // onClick={() => setActive(link.label)}
                // className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
                >
                  <icon.icon stroke={1.5} />
                </UnstyledButton>
              </Tooltip>
            </NavBarClosedGrid>
            {opened && <NavBarOpenedGrid />}
          </>
        );
      })}
    </Grid>
  );
};
const NavBar: React.FC = (): ReactElement => {
  const { open, handleToggle } = useToggle();
  return (
    <Navbar hidden={open} width={{ sm: open ? 200 : 65, lg: open ? 300 : 65 }}>
      {/* <SideBarIcons sideMenuIcons={sideBarIcons} opened={opened} /> */}
      <Grid>
      
        <Grid.Col xs={open ? 3 : 12}>
          <MenuComponentReusable items={sideBarIcons} opened={open} handleToggle={handleToggle} />
        </Grid.Col>
        {/* {opened && (
          <Grid.Col xs={9}>
            <MenuComponent />
          </Grid.Col>
        )} */}
      </Grid>
    </Navbar>
  );
};

export default NavBar;
