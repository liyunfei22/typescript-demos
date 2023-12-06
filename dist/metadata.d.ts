declare const requiredMetadataKey: unique symbol;
declare function required(target: Object, propertyKey: string | symbol, parameterIndex: number): void;
declare class BugReport {
    type: string;
    title: string;
    constructor(t: string);
    print(verbose: boolean): string;
}
declare function add(target: any): void;
declare class Person {
    private name;
    private age;
    constructor(name: string, age: number);
    getName(x: string): string;
}
interface Person2 {
    name: string;
    age: number;
}
declare function showMeta(target: any, propertyKey: any): void;
declare class Test {
    private p;
    private name;
    constructor(p: Person2, q: string);
    /**
     * add
     */
    add(x: number, y: number): number;
    des(x: number, y: number): number;
}
declare class Point44 {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
