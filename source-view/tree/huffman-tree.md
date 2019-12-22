```typescript
export class HuffmanTree {
    m_Root: HuffmanNode;
}
```

```typescript
export class HuffmanNode extends NumberNode {}
```

```typescript
<HuffmanTree /> +
    function constructor(this: HuffmanTree, values: Array<number>) {
        <PrepareQueue />;
        <CombineNodes />;
        <SetRoot />;
    };
```

```typescript
function PrepareQueue(values: Array<number>) {
    const queue = new PriorityQueue<HuffmanNode>({ comparator: (a: HuffmanNode, b: HuffmanNode) => a.m_Info - b.m_Info, initialValues: values.map(each => new NumberNode(each)) });
}
```

```typescript
function SetRoot(this: HuffmanTree, queue: PriorityQueue<HuffmanNode>) {
    this.m_Root = queue.dequeue();
}
```

```typescript
function CombineNodes(queue: PriorityQueue<HuffmanNode>) {
    while (queue.length !== 1) {
        const left = queue.dequeue();
        const right = queue.dequeue();
        const node = new HuffmanNode(left.m_Info + right.m_Info, left, right);
        queue.queue(node);
    }
}
```