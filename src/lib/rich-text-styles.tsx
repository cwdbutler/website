import { BLOCKS, INLINES } from "@contentful/rich-text-types";
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
          className="underline decoration-slate-400 underline-offset-4 transition-colors duration-300 hover:text-slate-200 hover:decoration-slate-200 *:hover:text-slate-200"
          target="_blank"
        >
          {children}
        </a>
      );
    },
  },
  renderMark: {
    // can't use the MARKS enum here due to this issue: https://github.com/contentful/rich-text/issues/395
    ["bold"]: (text) => {
      return (
        <span className="font-semibold text-emerald-300 transition-colors selection:bg-emerald-400 selection:text-white">
          {text}
        </span>
      );
    },
  },
};
