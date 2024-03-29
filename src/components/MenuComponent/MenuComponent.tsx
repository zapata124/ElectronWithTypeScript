import { Menu, Button, Text, Box, MantineTransition } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons';
import { Link } from 'react-router-dom';
export const MenuComponentReusable = ({ items, opened, handleToggle }: any) => {
  return (
    <Menu shadow='md' width={200} transition='slide-right'>
      {items.map((item: any, id: number) => {
        const ICON = item.icon;
        return (
          <>
            <Link to={`Content/${item.label}`}>
              <Menu.Item
                key={`menu-${id}`}
                icon={<ICON onClick={handleToggle} />}
                sx={{ paddingLeft: 19 }}
              >
                {opened && (
                  <Menu.Item
                    sx={{
                      paddingLeft: 30,
                      height: 0,
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                )}
              </Menu.Item>
            </Link>
          </>
        );
      })}
    </Menu>
  );
};
const MenuComponent = () => {
  return (
    <Menu shadow='md' width={200}>
      {/* <Menu.Label>Application</Menu.Label> */}
      <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
      <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
      <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
      <Menu.Item
        icon={<IconSearch size={14} />}
        rightSection={
          <Text size='xs' color='dimmed'>
            ⌘K
          </Text>
        }
      >
        Search
      </Menu.Item>
      <Menu.Divider />
      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
      <Menu.Item color='red' icon={<IconTrash size={14} />}>
        Delete my account
      </Menu.Item>
    </Menu>
  );
};

export default MenuComponent;
