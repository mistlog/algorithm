import { Relation } from "../src/linear-list/topological-sort";
import { TopologicalSort } from "../src/linear-list/topological-sort";
import { Polynomial, Item } from "../src/linear-list/polynomial-addition";

describe("topological sort", () =>
{
    /**
     * example taken from https://www.cs.usfca.edu/~galles/visualization/TopoSortDFS.html
     */
    test("topological-sort.1", () =>
    {
        const relations = [
            new Relation(0, 1),
            new Relation(0, 2),
            new Relation(1, 2),
            new Relation(2, 4),
            new Relation(2, 6),
            new Relation(3, null),
            new Relation(4, 6),
            new Relation(5, 6),
            new Relation(6, null),
            new Relation(7, null),
        ];

        const algo = new TopologicalSort(relations);
        const result = algo.Sort();
        expect(result).toEqual([
            0, 3, 5, 7, 1, 2, 4, 6
        ]);
    })

    /**
     * example taken from TAOCP I 2.2.3 fig.7
     */
    test("topological-sort.2", () =>
    {
        const relations = [
            new Relation(9, 2),
            new Relation(3, 7),
            new Relation(7, 5),
            new Relation(5, 8),
            new Relation(8, 6),
            new Relation(4, 6),
            new Relation(1, 3),
            new Relation(7, 4),
            new Relation(9, 5),
            new Relation(2, 8),
        ];

        const algo = new TopologicalSort(relations);
        const result = algo.Sort();
        expect(result).toEqual([
            9, 1, 2, 3, 7, 5, 4, 8, 6
        ]);
    })

    /**
     * Reference:
     * 
     * algo that generates all topological sorts: https://www.geeksforgeeks.org/all-topological-sorts-of-a-directed-acyclic-graph/
     * visualize algo: https://visualgo.net/en/dfsbfs
     * online IDE: https://www.onlinegdb.com/online_c++_compiler
     * 
     */
})

describe("addition of polynomial", () =>
{
    /**
     * example taken from TAOCP I 2.2.4
     */
    
    test("polynomial.addtion", () =>
    {
        /**
         * p = x + y + z
         */
        const p = new Polynomial([
            new Item(1, 100),
            new Item(1, 10),
            new Item(1, 1)
        ]);

        /**
         * q = x^2 - 2y - z
         */
        const q = new Polynomial([
            new Item(1, 200),
            new Item(-2, 10),
            new Item(-1, 1),
        ]);

        const sum = q.Add(p);

        /**
         * sum = x^2 + x - y
         */
        expect(sum).toEqual(new Polynomial([
            new Item(1, 200),
            new Item(1, 100),
            new Item(-1, 10)
        ]));
    })
})