import { StringNode } from "../common/binary-tree";

export class InorderTraverse
{
    m_Stack: Array<StringNode>;
    m_Visited: Array<string>;
}

<InorderTraverse /> + function Traverse(this: InorderTraverse & IInorderTraverse, root: StringNode)
{
    let current = root;

    for (; ;)
    {
        if (current)
        {
            //@ts-ignore
            <AddCurrentToTobeVisited />;
        }
        else
        {
            <CheckIfFinished />;

            //@ts-ignore
            <SetCurrentAsTobeVisited />;

            //@ts-ignore
            <VisitStringNode />;
        }
    }
};

function AddCurrentToTobeVisited(this: InorderTraverse, current: StringNode)
{
    this.m_Stack.push(current)
    current = current.m_Left as StringNode;
}

function CheckIfFinished(this: InorderTraverse)
{
    if (this.m_Stack.length === 0)
    {
        return;
    }
}

function VisitStringNode(this: IInorderTraverse, current: StringNode)
{
    this.Visit(current);
    current = current.m_Right as StringNode;
}

function SetCurrentAsTobeVisited(this: InorderTraverse, current: StringNode)
{
    current = this.m_Stack.pop();
}

<InorderTraverse /> + function constructor(this: InorderTraverse)
{
    this.m_Stack = new Array<StringNode>();
    this.m_Visited = new Array<string>();
};

export interface IInorderTraverse
{
    Visit(node: StringNode): void;
};

<InorderTraverse /> + function Visit(this: InorderTraverse, node: StringNode)
{
    this.m_Visited.push(node.m_Info);
}

/*
# Reference

This algo is adapted from TAOCP I 2.3.1

*/