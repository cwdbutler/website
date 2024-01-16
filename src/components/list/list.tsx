import { ListItem, type ListItemProps } from "../list-item/list-item";

interface ListProps {
  title: string;
  items?: ListItemProps[];
}

const List = ({ title, items }: ListProps) => (
  <div className="px-5">
    <h3 className="font-semibold">{title}</h3>
    <ul className="space-y-1">
      {items
        ? items.map((item, i) => {
            return <ListItem key={i} {...item} />;
          })
        : null}
    </ul>
  </div>
);

export default List;
