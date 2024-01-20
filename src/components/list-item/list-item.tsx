import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import type { Asset } from "contentful";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer";

export interface ListItemProps {
  icon: Asset;
  text: RichTextDocument;
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
    <li className="flex items-start">
      <span className="sm:hidden mr-2">-</span>
      <img
        className="hidden sm:block flex-shrink-0 w-6 h-6 mr-2"
        src={icon.fields.file?.url?.toString()}
        alt={icon.fields.title?.toString()}
      />
      {Text}
    </li>
  );
};
