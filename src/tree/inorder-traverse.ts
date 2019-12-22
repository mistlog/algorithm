import { StringNode } from "../common/binary-tree";
export class InorderTraverse {
  m_Stack: Array<StringNode>;
  m_Visited: Array<string>;

  Traverse(root: StringNode) {
    let current = root;

    for (;;) {
      if (current) {
        this.m_Stack.push(current);
        current = (current.m_Left as StringNode);
      } else {
        if (this.m_Stack.length === 0) {
          return;
        }

        current = this.m_Stack.pop();
        this.Visit(current);
        current = (current.m_Right as StringNode);
      }
    }
  }

  constructor() {
    this.m_Stack = new Array<StringNode>();
    this.m_Visited = new Array<string>();
  }

  Visit(node: StringNode) {
    this.m_Visited.push(node.m_Info);
  }

}
export interface IInorderTraverse {
  Visit(node: StringNode): void;
}
;