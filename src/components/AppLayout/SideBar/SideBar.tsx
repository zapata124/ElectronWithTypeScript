import { ReactElement } from 'react';
import { Aside, Text, MediaQuery } from '@mantine/core';
import { useToggle } from '../../../providers/ToggleProvider';
const SideBar: React.FC = (): ReactElement => {
  const { open } = useToggle()
  return (
    // <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
    // </MediaQuery>
      <Aside p='md' hiddenBreakpoint={'sm'} hidden={open} width={{ sm: 60 }}>
        {/* <Text>Application sidebar</Text> */}
      </Aside>
  );
};

export default SideBar;
