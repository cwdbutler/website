import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { options } from "../../lib/rich-text-styles";

interface RichTextProps {
  text: RichTextDocument;
}

export const RichText = ({ text }: RichTextProps) => {
  const Text = documentToReactComponents(text, {
    ...options,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => {
        return <p className="mt-4">{children}</p>;
      },
      ...options.renderNode,
    },
  });
  return Text;
};
