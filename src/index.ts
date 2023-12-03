// 函数类型表达式
export {};
import './class'
type GreetFunction = (a: string) => void;

const greet: GreetFunction = (name) => {
  console.log(`Hello ${name}`);
};
// 函数调用签名
type DescribableFunction = {
  description: string;
  (someArg: number): string;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg.toString();
}
myFunc.description = "test";

doSomething(myFunc);


// 构造函数类型
interface SomeObject {
  someProperty: string;
}
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn (ctor: SomeConstructor) {
  return new ctor("hello");
}
interface CallOrConstruct {
  nwe (s: string): Date;
  (n?: number): number;
}
function firstElement<Type>(arr: Type[]) {
  return arr[0];
}
const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
// const f = firstElement([1, "a"]);

function longest<Type  extends {length: number}>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b
  }
}

function makeDate(timestmp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d ! == undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
}
interface User {
  name: string;
  admin: boolean;
}
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
// const db = getDB();
// const admins = db.filterUsers(function(this: User){
//   return this.admin;
// })
function doSomething2(f: Function) {
  return f(1, 2, 3);
}

const args = [4, 5, 6] as const;
function f2(): void {
  // @ts-expect-error
  return true;
}
const a = f2();


const src = [1, 2, 3];
const dst = [0];
 
src.forEach((el) => dst.push(el));
type voidFunc = () => void;
 
const f1: voidFunc = () => {
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

function identity<T>(arg: T): T {
  return arg;
}

function logginIndentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// let myIdentity: <T>(arg: T) => T  = identity;
let myIdentity: {<T>(arg: T): T} = identity;

interface GenericIdentityFn <T> {
  (arg: T): T;
}

interface Lengthwise {
  length: number;
}

function logginIndentity2 <T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

function create<T>(C: {new (): T}): T {
  return new C();
}

class Beekeeper {
  hasMask: boolean = true;
}

class Zookeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  numLegs = 6;
  keeper: Beekeeper = new Beekeeper();
}

class Lion extends Animal {
  keeper: Zookeeper = new Zookeeper();
}


class C {
  x = 0;
  y = 0;
}
type T0 = InstanceType<typeof C>;

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};
