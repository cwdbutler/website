import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer";

interface RichTextProps {
  text: RichTextDocument;
}

const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_3]: (_node, children) => {
      return <h3 className="text-lg text-blue-400">{children}</h3>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a href={node.data.uri} className="text-cyan-600">
          {children}
        </a>
      );
    },
  },
};

export const RichText = ({ text }: RichTextProps) => {
  const Text = documentToReactComponents(text, options);
  return Text;
};
