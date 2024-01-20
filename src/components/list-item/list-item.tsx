import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer";

export interface ListItemProps {
  icon: {
    url: string;
    title: string;
  };
  text: string | RichTextDocument;
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

const isTypeRichText = (
  text: string | RichTextDocument,
): text is RichTextDocument => {
  return typeof text !== "string";
};

export const ListItem = ({ icon: { url, title }, text }: ListItemProps) => {
  return (
    <li className="flex items-start">
      <span className="sm:hidden mr-2">-</span>
      <img
        className="hidden sm:block flex-shrink-0 w-6 h-6 mr-2"
        src={url}
        alt={title as string}
      />
      {isTypeRichText(text) ? (
        documentToReactComponents(text, options)
      ) : (
        <p>{text}</p>
      )}
    </li>
  );
};
