import { StringNode } from "../src/common/binary-tree";
import { InorderTraverse } from "../src/tree/inorder-traverse";
import { HuffmanTree } from "../src/tree/huffman-tree";

describe("binary tree", () =>
{
    /**
     * example taken from TAOCP I 2.3.1
     */
    test("traverse.inorder", () =>
    {
        /**
         * 
         */
        const A = new StringNode("A");
        const B = A.m_Left = new StringNode("B");
        const D = B.m_Left = new StringNode("D");
        const C = A.m_Right = new StringNode("C");
        const E = C.m_Left = new StringNode("E");
        const G = E.m_Right = new StringNode("G");
        const F = C.m_Right = new StringNode("F");
        const H = F.m_Left = new StringNode("H");
        const J = F.m_Right = new StringNode("J");

        /**
         * 
         */
        const algo = new InorderTraverse();
        algo.Traverse(A);
        expect(algo.m_Visited).toEqual(["D", "B", "A", "E", "G", "C", "H", "F", "J"]);
    })

    /**
     * example taken from TAOCP I 2.3.4.5
     */
    test("huffman", () =>
    {
        const tree = new HuffmanTree([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]);
        expect(tree.m_Root).toMatchSnapshot();
    })
})