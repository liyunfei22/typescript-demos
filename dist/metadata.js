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
const requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    let existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
class BugReport {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
    print(verbose) {
        if (verbose) {
            return `type: ${this.type}\ntitle: ${this.title}`;
        }
        else {
            return this.title;
        }
    }
}
function add(target) {
    console.log(target);
}
let Person = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName(x) {
        return x;
    }
};
Person = __decorate([
    add,
    __metadata("design:paramtypes", [String, Number])
], Person);
function showMeta(target, propertyKey) {
}
let Test = class Test {
    constructor(p, q) {
        this.p = p;
        this.name = 's';
    }
    /**
     * add
     */
    add(x, y) {
        return x + y;
    }
    des(x, y) {
        return x - y;
    }
};
__decorate([
    showMeta,
    __metadata("design:type", String)
], Test.prototype, "name", void 0);
__decorate([
    showMeta,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Test.prototype, "add", null);
__decorate([
    showMeta,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Test.prototype, "des", null);
Test = __decorate([
    add,
    __metadata("design:paramtypes", [Object, String])
], Test);
class Point44 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// class Line {
//   private _start: Point;
//   private _end: Point;
//   @validate
//   set start(value: Point) {
//     this._start = value;
//   }
//   get start() {
//     return this._start;
//   }
//   @validate
//   set end(value: Point) {
//     this._end = value;
//   }
//   get end() {
//     return this._end;
//   }
// }
// function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
//   let set = descriptor.set!;
//   descriptor.set = function (value: T) {
//     let type = Reflect.getMetadata("design:type", target, propertyKey);
//     if (!(value instanceof type)) {
//       throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
//     }
//     set.call(this, value);
//   };
// }
// const line = new Line()
// line.start = new Point(0)
