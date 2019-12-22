export class Item {
  m_Coefficient: number;
  m_Exponential: number;

  constructor(coefficient: number, exponential: number) {
    this.m_Coefficient = coefficient;
    this.m_Exponential = exponential;
  }

}
export class Polynomial {
  m_Items: Array<Item>;

  Add(another: Polynomial) {
    const P = this.m_Items;
    const Q = [...another.m_Items];
    let p = 0;
    let q = 0;

    for (;;) {
      if (P[p].m_Exponential < Q[q].m_Exponential) {
        q += 1;
      } else if (P[p].m_Exponential === Q[q].m_Exponential) {
        if (P[p].m_Exponential < 0) {
          Q.pop();
          return Reflect.construct(Polynomial, [Q]);
        }

        Q[q].m_Coefficient += P[p].m_Coefficient;

        if (Q[q].m_Coefficient === 0) {
          Q.splice(q, 1);
        } else {
          q += 1;
        }

        p += 1;
      } else if (P[p].m_Exponential > Q[q].m_Exponential) {
        const new_item = Reflect.construct(Item, [P[p].m_Coefficient, P[p].m_Exponential]);
        Q.splice(q, 0, new_item);
        p += 1;
        q += 1;
      }
    }
  }

  constructor(items: Array<Item>) {
    this.m_Items = [...items, Reflect.construct(Item, [0, -1])];
  }

}