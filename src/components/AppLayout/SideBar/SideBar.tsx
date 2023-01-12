import { ReactElement } from 'react';
import { Aside, Text, MediaQuery } from '@mantine/core';

const SideBar = (): ReactElement => {
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
        <Text>Application sidebar</Text>
      </Aside>
    </MediaQuery>
  );
};

export default SideBar;
