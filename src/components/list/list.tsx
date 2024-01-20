import { ListItem } from "../list-item";
import type { ListItemProps } from "../list-item/list-item";

interface ListProps {
  items: ListItemProps[];
}

export const List = ({ items }: ListProps) => (
  <ul className="grid auto-rows-fr gap-1 sm:grid-cols-2">
    {items.map((item, i) => {
      return <ListItem key={i} {...item} />;
    })}
  </ul>
);
