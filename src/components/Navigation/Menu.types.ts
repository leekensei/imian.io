export type MenuItem = {
  to: string;
  label: string;
};
export interface MenuProps {
  path?: string;
  menus: MenuItem[];
}
