"use strict";
class Base {
    constructor() {
        this.k = 4;
    }
}
class Point extends Base {
    constructor(x) {
        super();
        this.name = 'hello';
        this._length = 2;
        this.y = 0;
        this.x = x;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
    m() {
        return this.x + this.x;
    }
}
const p = new Point(2);
p.x = 0;
p.y = 0;
p.length = 4;
console.log(p);
