declare class Base {
    k: number;
    greet(): void;
}
declare class Point extends Base {
    readonly name: string;
    _length: number;
    x: number;
    y: number;
    constructor(x: any);
    get length(): number;
    set length(length: number);
    m(): number;
}
interface Pingable {
    ping(): void;
}
declare class Sonar implements Pingable, checkable {
    ping(): void;
    check(name: string): boolean;
}
interface checkable {
    check(name: string): boolean;
}
declare const p: Point;
declare class Derived extends Base {
    greet(name?: string): void;
}
declare class MySafe {
    private secretKey;
}
declare const s: MySafe;
declare class MyClass {
    static x: number;
}
declare class Derived2 extends MyClass {
    myGreeting: number;
}
declare class Foo {
    #private;
    get count(): number;
}
declare class MyClass2 {
    name: string;
    getName: () => string;
}
declare const c: MyClass2;
declare const g: () => string;
interface Something {
    name: string;
}
declare function fn(this: Something, x: number): string;
declare class MyClass3 {
    name: string;
    getName(this: MyClass3): string;
}
declare class Params {
    x: number;
    constructor(x: number);
}
declare const someClass: {
    new (): {};
};
declare class Point2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
type PointInstance = InstanceType<typeof Point2>;
declare function moveRight(point: PointInstance): void;
declare abstract class Base2 {
    abstract getName(): string;
    printName(): void;
}
declare class Derived3 extends Base2 {
    getName(): string;
}
