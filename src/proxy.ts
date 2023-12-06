export function add (a, b) {
  return a + b
}
const handler = {
  apply(target, thisArg, argumentsList) {
    console.log(target, thisArg, argumentsList)

  }
}
const proxy1 = new Proxy(add, handler)
proxy1(1, 2)
const obj = { name: 'liyf'}
proxy1.call(obj, 1, 2);

function monster1(this: any, disposition) {
  this.disposition = disposition;
}
const handler1 = {
  construct(targe, args) {
    console.log(targe, args)
    return new targe(...args)
  }
}


const proxy2 = new Proxy(monster1, handler1);
console.log(new proxy2('hello').disposition);


const p = new Proxy({} as any, {
  defineProperty: function(target, prop, descriptor) {
    console.log(target, prop, descriptor)
    return Reflect.defineProperty(target, prop, descriptor)
  }
})
const desc = {
  configurable: true,
  enumerable: true,
  value: 10
}
Object.defineProperty(p, 'a', desc)
console.log(p.a)


const object: any = Object.create({
  name: 'li',
  age: 10
})
object.a = 'a'
console.log(object)
console.log(Reflect.ownKeys(object))
console.log(Reflect.has(object, 'name'))

const m1 = new Map()
m1.set('a', 1)
m1.set('b', 2)
// set has get delete clear forEach
console.log(m1.entries())
console.log(m1.keys())
console.log(m1.values())

for (const [key, val] of m1) {
  console.log(key, val)
}

const kvArray: any = [
  ['key1', 'val1'],
  ['key2', 'val2']
]

const m2 = new Map<string, string>(kvArray)
console.log(m2)
console.log(Array.from(m2)); // 输出和 kvArray 相同的数组

const s1 = new Set();
s1.add(1)
// add delete has 
// keys values entries
// array 转 set 
// set 转 array
const x = Symbol()
export type a = typeof x
const b:a = x