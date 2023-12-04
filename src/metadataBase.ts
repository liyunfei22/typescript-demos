export {}
import 'reflect-metadata'
const car  = {
  brand: 'bwm',
  price: 10
}
console.log('sssssss------metadata')
Reflect.defineMetadata('desc', 'this is good car', car);
Reflect.defineMetadata('desc1', 'this is good car1', car);
Reflect.defineMetadata('desc2', 'this is good car2', car);
Reflect.defineMetadata('desc3', 'cheap', car, 'price');
console.log(Reflect.hasMetadata('desc', car))
console.log(Reflect.hasOwnMetadata('desc', car))
console.log(Reflect.hasMetadata('desc', car, 'price'))

console.log(Reflect.getMetadata('desc', car))
console.log(Reflect.getMetadata('desc', car, 'price'))
// getOwnMetadata
console.log('getOwnMetadata-------d')
console.log(Reflect.getOwnMetadata('desc', car))
let result = Reflect.getOwnMetadata('desc', car);
console.log(result)
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

// interface Person{
//   name: string;
//   age: number;
// }

