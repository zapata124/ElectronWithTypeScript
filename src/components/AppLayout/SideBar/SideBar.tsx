import { ReactElement } from 'react';
import { Aside, Text, MediaQuery } from '@mantine/core';
interface SideBarType {
  opened: boolean;
}
const SideBar: React.FC<SideBarType> = ({ opened }: SideBarType): ReactElement => {
  return (
    // <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
    // </MediaQuery>
      <Aside p='md' hiddenBreakpoint={'sm'} hidden={opened} width={{ sm: 200, lg: 65 }}>
        {/* <Text>Application sidebar</Text> */}
      </Aside>
  );
};

export default SideBar;
