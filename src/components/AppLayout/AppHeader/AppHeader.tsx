import { ReactElement } from 'react';
import { Header, Text, MediaQuery, Burger, useMantineTheme, Grid } from '@mantine/core';
import AutoComplete from '../../AutoComplete';
interface AppHeaderTypes {
  open: boolean;
  handleOpen: () => void;
}
const AppHeader: React.FC<AppHeaderTypes> = ({
  open,
  handleOpen,
}: AppHeaderTypes): ReactElement => {
  const theme = useMantineTheme();
  return (
    <Header height={{ base: 50, md: 70 }} p='md'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/* <MediaQuery largerThan='sm' styles={{ display: 'none' }}> */}
        <Burger opened={open} onClick={handleOpen} size='sm' color={theme.colors.gray[6]} mr='xl' />
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
