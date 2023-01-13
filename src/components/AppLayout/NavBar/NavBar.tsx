import { ReactElement } from 'react';
import { Navbar, Text, Tooltip, UnstyledButton } from '@mantine/core';
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
const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];
const mainLinks = mainLinksMockdata.map((link) => (
  <Tooltip label={link.label} position='right' withArrow transitionDuration={0} key={link.label}>
    <UnstyledButton
      // onClick={() => setActive(link.label)}
      // className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
    >
      <link.icon stroke={1.5} />
    </UnstyledButton>
  </Tooltip>
));
const NavBar: React.FC<NavBarType> = ({ opened }: NavBarType): ReactElement => {
  return (
    <Navbar hidden={opened} width={{ sm: opened ? 200 : 65, lg: opened ? 300 : 65 }}>
      {/* <Text>Application navbar</Text> */}
      {mainLinks}
    </Navbar>
  );
};

export default NavBar;
