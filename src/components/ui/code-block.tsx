import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const codeComponent = {
  //@ts-expect-error - ignore typing for proof of concept
  code(props) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { children, className, node, ...rest } = props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const match = /language-(\w+)/.exec(className || "");
    return !!match ? (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        style={oneDark}
      />
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};
