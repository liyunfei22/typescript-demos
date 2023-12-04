class Base {
  k = 4;
  greet() {
    console.log('hello')
  }
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
interface Pingable {
  ping():void;
}
class Sonar implements Pingable, checkable {
  ping(): void {
      console.log('ping')
  }
  check(name: string): boolean {
      return !name
  }
}
interface checkable {
  check(name: string): boolean
}
const p = new Point(2);
p.x = 0;
p.y = 0;
p.length = 4
console.log(p);

class Derived extends Base {
  greet(name?: string): void {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
  }
}

// visibility

class MySafe {
  private secretKey = 123;
}

const s = new MySafe();
console.log(s['secretKey'])

class MyClass {
  static x = 4;
}
// name, length, and call aren’t valid to define as static members:
class Derived2 extends MyClass {
  myGreeting = Derived2.x;
}
console.log(new Derived2().myGreeting)

class Foo {
  static #count = 0
   get count() {
    return Foo.#count
   }
}

// 泛型类 static 的成员永远不能引用该类的类型参数。
// 如果你有一个函数，它经常以一种失去上下文 this 的方式被调用，那么使用箭头函数属性而不是方法定义是有意义的：


class MyClass2 {
  name = 'myclass';
  getName = () => {
    return this.name
  }
}

const c = new MyClass2();
const g = c.getName;
console.log(g())
interface Something {
  name: string
}
function fn(this: Something, x: number) {
  return x + this.name
}

class MyClass3 {
  name = 'ss';
  getName(this: MyClass3) {
    return this.name
  }
}

// parameter properties
class Params {
  constructor(
   public x: number
  ) {

  }
}

const someClass = class {

}

class Point2 {
  x: number;
  y: number;
  constructor(x: number,y:number) {
    this.x = x;
    this.y = y;
  }
}

type PointInstance = InstanceType<typeof Point2>

function moveRight(point: PointInstance) {
  point.x +=5;
}

abstract class Base2 {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived3 extends Base2 {
  getName() {
    return "world";
  }
}
