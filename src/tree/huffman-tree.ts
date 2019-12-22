import { NumberNode } from "../common/binary-tree";
import { default as PriorityQueue } from "ts-priority-queue";
export class HuffmanTree {
  m_Root: HuffmanNode;

  constructor(values: Array<number>) {
    const queue = new PriorityQueue<HuffmanNode>({
      comparator: (a: HuffmanNode, b: HuffmanNode) => a.m_Info - b.m_Info,
      initialValues: values.map(each => new NumberNode(each))
    });

    while (queue.length !== 1) {
      const left = queue.dequeue();
      const right = queue.dequeue();
      const node = new HuffmanNode(left.m_Info + right.m_Info, left, right);
      queue.queue(node);
    }

    this.m_Root = queue.dequeue();
  }

}
export class HuffmanNode extends NumberNode {}