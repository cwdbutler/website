import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";

export const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_3]: (_node, children) => {
      return <h3 className="text-lg text-blue-400">{children}</h3>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          href={node.data.uri}
          className="text-cyan-600 transition-colors duration-300 hover:text-cyan-300"
        >
          {children}
        </a>
      );
    },
  },
  renderMark: {
    [MARKS.UNDERLINE]: (text) => {
      return (
        <span className="underline decoration-green-300 underline-offset-4">
          {text}
        </span>
      );
    },
  },
};
