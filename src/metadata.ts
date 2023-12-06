const requiredMetadataKey = Symbol("required");
 
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
 

class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
 
  print(verbose: boolean) {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
     return this.title; 
    }
  }
}

function add(target) {
  console.log(target)
}

@add
class Person {
  constructor(
    private name: string,
    private age: number
  ) {

  }
  getName(x: string) {
    return x
  }
}
interface Person2 {
  name: string;
  age: number;
}
function showMeta(target, propertyKey) {

}
@add
class Test {
  @showMeta
  private name: string = 's';

  constructor(private p: Person2, q: string) {
    
  }
  /**
   * add
   */
  @showMeta
  public add(x: number, y: number):number {
    return x + y
    
  }

  @showMeta
  public des(x: number, y: number):number {
    return x - y
  }
}

class Point44 {
  constructor(public x: number, public y: number) {}
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
