"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @emitDecoratorMetadata
// @experimentalDecorators
// @strictPropertyInitialization: false
require("reflect-metadata");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Line {
    set start(value) {
        this._start = value;
    }
    get start() {
        return this._start;
    }
    set end(value) {
        this._end = value;
    }
    get end() {
        return this._end;
    }
}
__decorate([
    validate,
    __metadata("design:type", Point),
    __metadata("design:paramtypes", [Point])
], Line.prototype, "start", null);
__decorate([
    validate,
    __metadata("design:type", Point),
    __metadata("design:paramtypes", [Point])
], Line.prototype, "end", null);
function validate(target, propertyKey, descriptor) {
    let set = descriptor.set;
    descriptor.set = function (value) {
        let type = Reflect.getMetadata("design:type", target, propertyKey);
        if (!(value instanceof type)) {
            throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
        }
        set.call(this, value);
    };
}
const line = new Line();
line.start = new Point(0, 0);
// @ts-ignore
// line.end = {}
// Fails at runtime with:
// > Invalid type, got object not Point
const myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    }
};
const myReceiverObject = {
    foo: 4,
    bar: 4
};
const foo = Reflect.get(myObject, 'foo');
const baz = Reflect.get(myObject, 'baz', myReceiverObject);
console.log(foo, baz);
const car = {
    brand: 'bwm',
    price: 10
};
Reflect.defineMetadata('desc', 'this is good car', car);
Reflect.defineMetadata('desc2', 'this is good car two', car);
Reflect.defineMetadata('desc', 'cheap', car, 'price');
console.log(Reflect.hasMetadata('desc', car));
console.log(Reflect.hasOwnMetadata('desc', car));
console.log(Reflect.hasMetadata('desc', car, 'price'));
console.log(Reflect.getMetadata('desc', car));
console.log(Reflect.getOwnMetadata('desc', car));
console.log(Reflect.getMetadata('desc', car, 'price'));
console.log(Reflect.getMetadataKeys(car));
console.log(Reflect.getOwnMetadataKeys(car));
console.log(Reflect.getMetadataKeys(car, 'price'));
let C = class C {
    method(a, b) {
        return a + b;
    }
};
__decorate([
    Reflect.metadata('bar', 2),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], C.prototype, "method", null);
C = __decorate([
    Reflect.metadata('foo', 1)
], C);
const c = new C();
console.log(Reflect.getMetadata('foo', C));
console.log('-------');
console.log(Reflect.getMetadataKeys(C));
console.log(Reflect.getMetadataKeys(C.prototype, 'method'));
console.log(Reflect.getMetadata('bar', C.prototype, 'method'));
console.log(Reflect.getMetadata('design:returntype', C.prototype, 'method'));
console.log(Reflect.getMetadata('design:paramtypes', C.prototype, 'method'));
console.log(Reflect.getMetadata('design:type', C.prototype, 'method'));
console.log(c);
