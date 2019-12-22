export class Relation {
  m_X: number;
  m_Y: number | null;

  constructor(x: number, y: number | null) {
    this.m_X = x;
    this.m_Y = y;
  }

}
export class RelationInfo {
  m_DirectPredecessorsCount: number;
  m_DirectSuccessors: Array<number>;

  constructor() {
    this.m_DirectPredecessorsCount = 0;
    this.m_DirectSuccessors = new Array<number>();
  }

}
export class TopologicalSort {
  m_RelationsInfo: Map<number, RelationInfo>;
  m_OutputQueue: Array<number>;
  m_Output: Array<number>;

  Sort() {
    while (this.m_OutputQueue.length !== 0) {
      const front = this.m_OutputQueue.shift();
      this.m_Output.push(front);
      const front_info = this.m_RelationsInfo.get(front);
      front_info.m_DirectSuccessors.forEach(successor => {
        const successor_info = this.m_RelationsInfo.get(successor);
        successor_info.m_DirectPredecessorsCount -= 1;

        if (successor_info.m_DirectPredecessorsCount === 0) {
          this.m_OutputQueue.push(successor);
        }
      });
    }

    return this.m_Output;
  }

  constructor(relations: Array<Relation>) {
    this.m_RelationsInfo = new Map<number, RelationInfo>();
    this.m_OutputQueue = new Array<number>();
    this.m_Output = new Array<number>();
    relations.forEach(relation => {
      [relation.m_X, relation.m_Y].forEach(value => {
        if (value !== null && !this.m_RelationsInfo.has(value)) {
          this.m_RelationsInfo.set(value, new RelationInfo());
        }
      });

      if (relation.m_Y) {
        const x_info = this.m_RelationsInfo.get(relation.m_X);
        x_info.m_DirectSuccessors.push(relation.m_Y);
        const y_info = this.m_RelationsInfo.get(relation.m_Y);
        y_info.m_DirectPredecessorsCount += 1;
      }
    });
    this.m_RelationsInfo.forEach((info, key) => {
      if (info.m_DirectPredecessorsCount === 0) {
        this.m_OutputQueue.push(key);
      }
    });
  }

}