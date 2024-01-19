import { Fragment } from "react";
import { ListItem } from "../list-item";
import type { ListItemProps } from "../list-item/list-item";

interface ListProps {
  title: string;
  items: ListItemProps[];
}

export const List = ({ title, items }: ListProps) => (
  <Fragment>
    <h3 className="font-semibold">{title}</h3>
    <ul className="grid auto-rows-fr sm:grid-cols-3">
      {items.map((item, i) => {
        return <ListItem key={i} {...item} />;
      })}
    </ul>
  </Fragment>
);
