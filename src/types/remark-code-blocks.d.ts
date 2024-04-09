/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "remark-code-blocks" {
  export interface CodeBlockOptions {
    lang?: string;
    name?: string;
    formatter?: (code: string) => string;
  }

  export interface CodeBlock {
    lang?: string;
    value?: string;
  }

  export interface TreeNode {
    children: CodeBlock[];
  }

  export interface FileData {
    data?: Record<string, any>;
  }

  export interface RemarkCodeBlocks {
    (options?: CodeBlockOptions): (tree: TreeNode, file: FileData) => void;
    codeblocks: (
      tree: TreeNode,
      options?: CodeBlockOptions,
    ) => Record<string, any>;
  }

  const remarkCodeBlocks: RemarkCodeBlocks;
  export default remarkCodeBlocks;
}
