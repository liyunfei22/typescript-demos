"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Foo_count;
class Base {
    constructor() {
        this.k = 4;
    }
    greet() {
        console.log('hello');
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
        return this.x + this.y;
    }
}
class Sonar {
    ping() {
        console.log('ping');
    }
    check(name) {
        return !name;
    }
}
const p = new Point(2);
p.x = 0;
p.y = 0;
p.length = 4;
console.log(p);
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
// visibility
class MySafe {
    constructor() {
        this.secretKey = 123;
    }
}
const s = new MySafe();
console.log(s['secretKey']);
class MyClass {
}
MyClass.x = 4;
// name, length, and call aren’t valid to define as static members:
class Derived2 extends MyClass {
    constructor() {
        super(...arguments);
        this.myGreeting = Derived2.x;
    }
}
console.log(new Derived2().myGreeting);
class Foo {
    get count() {
        return __classPrivateFieldGet(_a, _a, "f", _Foo_count);
    }
}
_a = Foo;
_Foo_count = { value: 0 };
// 泛型类 static 的成员永远不能引用该类的类型参数。
// 如果你有一个函数，它经常以一种失去上下文 this 的方式被调用，那么使用箭头函数属性而不是方法定义是有意义的：
class MyClass2 {
    constructor() {
        this.name = 'myclass';
        this.getName = () => {
            return this.name;
        };
    }
}
const c = new MyClass2();
const g = c.getName;
console.log(g());
function fn(x) {
    return x + this.name;
}
class MyClass3 {
    constructor() {
        this.name = 'ss';
    }
    getName() {
        return this.name;
    }
}
// parameter properties
class Params {
    constructor(x) {
        this.x = x;
    }
}
const someClass = class {
};
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function moveRight(point) {
    point.x += 5;
}
class Base2 {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
class Derived3 extends Base2 {
    getName() {
        return "world";
    }
}
