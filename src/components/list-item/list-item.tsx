import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "../../lib/rich-text-styles";

export interface ListItemProps {
  icon: {
    url: string;
    title: string;
  };
  text: string | RichTextDocument;
}

const isTypeRichText = (
  text: string | RichTextDocument,
): text is RichTextDocument => {
  return typeof text !== "string";
};

export const ListItem = ({ icon: { url, title }, text }: ListItemProps) => {
  return (
    <li className="flex items-start">
      <span className="mr-2 sm:hidden">-</span>
      <img
        className="mr-2 hidden h-6 w-6 flex-shrink-0 sm:block"
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
