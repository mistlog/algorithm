```typescript
export class InorderTraverse {
    m_Stack: Array<StringNode>;
    m_Visited: Array<string>;
}
```

```typescript
<InorderTraverse /> +
    function Traverse(this: InorderTraverse & IInorderTraverse, root: StringNode) {
        let current = root;
        for (;;) {
            if (current) {
                <AddCurrentToTobeVisited />;
            } else {
                <CheckIfFinished />;
                <SetCurrentAsTobeVisited />;
                <VisitStringNode />;
            }
        }
    };
```

```typescript
function AddCurrentToTobeVisited(this: InorderTraverse, current: StringNode) {
    this.m_Stack.push(current);
    current = current.m_Left as StringNode;
}
```

```typescript
function CheckIfFinished(this: InorderTraverse) {
    if (this.m_Stack.length === 0) {
        return;
    }
}
```

```typescript
function VisitStringNode(this: IInorderTraverse, current: StringNode) {
    this.Visit(current);
    current = current.m_Right as StringNode;
}
```

```typescript
function SetCurrentAsTobeVisited(this: InorderTraverse, current: StringNode) {
    current = this.m_Stack.pop();
}
```

```typescript
<InorderTraverse /> +
    function constructor(this: InorderTraverse) {
        this.m_Stack = new Array();
        this.m_Visited = new Array();
    };
```

```typescript
export interface IInorderTraverse {
    Visit(node: StringNode): void;
}
```

```typescript
<InorderTraverse /> +
    function Visit(this: InorderTraverse, node: StringNode) {
        this.m_Visited.push(node.m_Info);
    };
```

# Reference

This algo is adapted from TAOCP I 2.3.1