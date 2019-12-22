export class Node
{
    m_Left: Node;
    m_Right: Node;

    constructor(left?: Node, right?: Node)
    {
        this.m_Left = left || null;
        this.m_Right = right || null;
    }
}

export class StringNode extends Node
{
    m_Info: string;

    constructor(info: string, left?: Node, right?: Node)
    {
        super(left, right);
        this.m_Info = info;
    }
}

export class NumberNode extends Node
{
    m_Info: number;

    constructor(info: number, left?: Node, right?: Node)
    {
        super(left, right);
        this.m_Info = info;
    }
}