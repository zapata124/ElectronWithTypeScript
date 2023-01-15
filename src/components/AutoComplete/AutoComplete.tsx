import { Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

const AutoComplete = () => {
  return (
    <Autocomplete
      icon={<IconSearch />}
      placeholder='Search'
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
};

export default AutoComplete;
