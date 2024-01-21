import { ListItem } from "../list-item";
import type { ListItemProps } from "../list-item/list-item";

interface ListProps {
  items: ListItemProps[];
}

export const List = ({ items }: ListProps) => (
  <ul className="flex auto-rows-fr flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:gap-x-8">
    {items.map((item, i) => {
      return <ListItem key={i} {...item} />;
    })}
  </ul>
);
