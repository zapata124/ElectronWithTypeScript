import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ProviderType {
  children: ReactNode;
}
interface ToggleProviderContextTypes {
  open: boolean;
  handleToggle: () => void;
}
const ToggleProviderContext = createContext<ToggleProviderContextTypes>({
  open: false,
  handleToggle: () => undefined,
});

const ToggleProvider: React.FC<ProviderType> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <ToggleProviderContext.Provider value={{ open, handleToggle }}>
      {children}
    </ToggleProviderContext.Provider>
  );
};

export const useToggle = () => {
  const Toggle = useContext(ToggleProviderContext);
  return Toggle;
};

export default ToggleProvider;
