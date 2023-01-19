import { ReactElement } from 'react';
import { Header, Text, MediaQuery, Burger, useMantineTheme, Grid } from '@mantine/core';
import AutoComplete from '../../AutoComplete';
import { useToggle } from '../../../providers/ToggleProvider';
const AppHeader: React.FC = (): ReactElement => {
  const theme = useMantineTheme();
  const { open, handleToggle} = useToggle()
  return (
    <Header height={{ base: 50, md: 70 }} p='md'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/* <MediaQuery largerThan='sm' styles={{ display: 'none' }}> */}
        <Burger opened={open} onClick={handleToggle} size='sm' color={theme.colors.gray[6]} mr='xl' />
        {/* </MediaQuery> */}
        <Grid sx={{ width: '100%' }}>
          <Grid.Col xs={3}>
            {/* <Text>Application header</Text> */}
            {/* <AutoComplete /> */}
          </Grid.Col>
          <Grid.Col xs={6}>
            {/* <Text>Application header</Text> */}
            <AutoComplete />
          </Grid.Col>
          <Grid.Col xs={3}>
            {/* <Text>Application header</Text> */}
            {/* <AutoComplete /> */}
          </Grid.Col>
        </Grid>
      </div>
    </Header>
  );
};

export default AppHeader;
