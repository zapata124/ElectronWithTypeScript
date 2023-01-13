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
const NavBarOpenedGrid = () => {
  return (
    <Grid.Col xs={10}>
      ss
    </Grid.Col>
  );
};
const NavBarClosedGrid = ({ children, opened }: any) => {
  console.log({ opened });
  return (
    <>
      <Grid.Col
        xs={opened ? 2 : 12}
        sx={{ paddingLeft: 26 }}
      >
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
const NavBar: React.FC<NavBarType> = ({ opened }: NavBarType): ReactElement => {
  console.log(opened);
  return (
    <Navbar hidden={opened} width={{ sm: opened ? 200 : 65, lg: opened ? 300 : 65 }}>
      <SideBarIcons sideMenuIcons={sideBarIcons} opened={opened} />
    </Navbar>
  );
};

export default NavBar;
