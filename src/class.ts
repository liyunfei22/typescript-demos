class Base {
  k = 4;
}
class Point extends Base{
  readonly name: string = 'hello'
  _length: number = 2;
  x!: number;
  y: number = 0;
  constructor(x) {
    super();
    this.x = x
  }
  get length () {
    return this._length
  }
  set length (length) {
    this._length = length
  }
  m () {
    return this.x + this.y
  }
}

const p = new Point(2);
p.x = 0;
p.y = 0;
p.length = 4
console.log(p);