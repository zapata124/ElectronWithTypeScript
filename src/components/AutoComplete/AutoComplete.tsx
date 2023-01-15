import { Autocomplete } from '@mantine/core';

const AutoComplete = () => {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
};

export default AutoComplete