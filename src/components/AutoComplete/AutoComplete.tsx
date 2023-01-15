import { Autocomplete } from '@mantine/core';

const AutoComplete = () => {
  return (
    <Autocomplete
      placeholder="Search"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
};

export default AutoComplete