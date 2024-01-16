import type { Document as RichText } from "@contentful/rich-text-types";
import type { Asset } from "contentful";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer";

export interface ListItemProps {
  icon?: Asset;
  text: RichText;
}

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a href={node.data.uri} className="text-cyan-600">
          {children}
        </a>
      );
    },
  },
};

export const ListItem = ({ icon, text }: ListItemProps) => {
  const Text = documentToReactComponents(text, options);
  return (
    <li className="flex items-center space-x-4 text-xs">
      {icon && (
        <img
          className="flex-shrink-0 w-6 h-6"
          src={icon.fields.file?.url?.toString()}
          alt={icon.fields.title?.toString()}
        />
      )}
      <p className="text-sm text-gray-500">{Text}</p>
    </li>
  );
};
