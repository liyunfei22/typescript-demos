// @emitDecoratorMetadata
// @experimentalDecorators
// @strictPropertyInitialization: false
import "reflect-metadata";

class Point {
  constructor(public x: number, public y: number) {}
}

class Line {
  private _start!: Point;
  private _end!: Point;

  @validate
  set start(value: Point) {
    this._start = value;
  }

  get start() {
    return this._start;
  }

  @validate
  set end(value: Point) {
    this._end = value;
  }

  get end() {
    return this._end;
  }
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
  let set = descriptor.set!;
  
  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);

    if (!(value instanceof type)) {
      throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
    }

    set.call(this, value);
  };
}

const line = new Line()
line.start = new Point(0, 0)

// @ts-ignore
// line.end = {}

// Fails at runtime with:
// > Invalid type, got object not Point
const myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar
  }
}
const myReceiverObject = {
  foo: 4,
  bar: 4
}
const foo = Reflect.get(myObject, 'foo');
const baz = Reflect.get(myObject, 'baz', myReceiverObject)
console.log(foo, baz);


const car  = {
  brand: 'bwm',
  price: 10
}

Reflect.defineMetadata('desc', 'this is good car', car);
Reflect.defineMetadata('desc2', 'this is good car two', car);
Reflect.defineMetadata('desc', 'cheap', car, 'price');
console.log(Reflect.hasMetadata('desc', car))
console.log(Reflect.hasOwnMetadata('desc', car))
console.log(Reflect.hasMetadata('desc', car, 'price'))

console.log(Reflect.getMetadata('desc', car))
console.log(Reflect.getOwnMetadata('desc', car))
console.log(Reflect.getMetadata('desc', car, 'price'))

console.log(Reflect.getMetadataKeys(car))
console.log(Reflect.getOwnMetadataKeys(car))
console.log(Reflect.getMetadataKeys(car, 'price'))

@Reflect.metadata('foo', 1)
class C {
  @Reflect.metadata('bar', 2)
  method(a: number, b: number): number {
    return a + b
  }
}
const c = new C();
console.log(Reflect.getMetadata('foo', C))
console.log('-------')
console.log(Reflect.getMetadataKeys(C))
console.log(Reflect.getMetadataKeys(C.prototype, 'method'))
console.log(Reflect.getMetadata('bar', C.prototype, 'method'))
console.log(Reflect.getMetadata('design:returntype', C.prototype, 'method'))
console.log(Reflect.getMetadata('design:paramtypes', C.prototype, 'method'))
console.log(Reflect.getMetadata('design:type', C.prototype, 'method'))
console.log(c);