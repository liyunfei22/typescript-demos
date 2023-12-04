"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name) => {
    console.log(`Hello ${name}`);
};
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg.toString();
}
myFunc.description = "test";
doSomething(myFunc);
function fn(ctor) {
    return new ctor("hello");
}
function firstElement(arr) {
    return arr[0];
}
const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
// const f = firstElement([1, "a"]);
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
function makeDate(mOrTimestamp, d, y) {
    if (d == undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
// const db = getDB();
// const admins = db.filterUsers(function(this: User){
//   return this.admin;
// })
function doSomething2(f) {
    return f(1, 2, 3);
}
const args = [4, 5, 6];
function f2() {
    // @ts-expect-error
    return true;
}
const a = f2();
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el));
const f1 = () => {
    return true;
};
const v1 = f1();
// class GenericNumber<Type> {
//   zeroValue: Type;
//   add: (x: Type, y: Type) => Type;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
function identity(arg) {
    return arg;
}
function logginIndentity(arg) {
    console.log(arg.length);
    return arg;
}
// let myIdentity: <T>(arg: T) => T  = identity;
let myIdentity = identity;
function logginIndentity2(arg) {
    console.log(arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
function create(C) {
    return new C();
}
class Beekeeper {
    constructor() {
        this.hasMask = true;
    }
}
class Zookeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.numLegs = 6;
        this.keeper = new Beekeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new Zookeeper();
    }
}
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
