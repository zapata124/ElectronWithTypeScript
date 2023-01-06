import { View, Flex, Header, Grid } from '@adobe/react-spectrum';

const App = () => {
  return (
    <Grid
      areas={['header  header', 'sidebar content', 'footer  footer', 'footer  footer']}
      columns={['1fr', '3fr']}
      rows={['size-2000', 'size-6000', 'size-2000']}
      height='size-6000'
      gap='size-100'
    >
      <View backgroundColor='celery-600' gridArea='header' />
      <View backgroundColor='blue-600' gridArea='sidebar' height='size-6000' />
      <View backgroundColor='blue-600' gridArea='sidebar' height='size-6000' />
      <View backgroundColor='purple-600' gridArea='content' />
      <View backgroundColor='magenta-600' gridArea='footer' />
    </Grid>
  );
};
export default App;
