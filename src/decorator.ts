// import "reflect-metadata";

function sealed(target) {
  console.log('sealed', target)
}

function color(target) {
  console.log('color outer')
};

@color
@sealed
class C {
  x = 0;
  y = 0;
}
// function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called");
//   };
// }
 
// function second() {
//   console.log("second(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("second(): called");
//   };
// }
 
// class ExampleClass {
//   @first()
//   @second()
//   method() {}
// }

// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

// @sealed
// class BugReport {
//   type = "report";
//   title: string;
 
//   constructor(t: string) {
//     this.title = t;
//   }
// }

// const a = new BugReport('t');

// a.title = 's';

function reportableClassDecorator<T extends  { new (...args: any[]): {}}> (constructor: T) {
  return class extends constructor {
    reportingURL = 'HTTP:WWW...'
  }
}

@reportableClassDecorator
class BugReport2 {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug =  new BugReport2('need');
console.log(bug);



@reportableClassDecorator
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "hello" + this.greeting
  }
}

function enumerable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('--------------------')
    console.log('target', target === Greeter.prototype)
    console.log('propertyKey', propertyKey)
    console.log('descriptor', descriptor.value.toString())
    descriptor.enumerable = value;
  }
}
const a = new Greeter('hello')
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable =value;
  }
}

class Point3 {
  private _x: number;
  private _y: number;
  constructor (x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  @configurable(false)
  get x() {
    return this._x;
  }
  @configurable(false)
  get y() {
    return this._y;
  }
}
import "reflect-metadata";
const formatMetadataKey = Symbol('format');

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}


class Greeter2 {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}

const g = new Greeter2('world');
console.log(g.greet())








const requiredMetadataKey = Symbol("required");

class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
 
  print(@required verbose: boolean, @required x: boolean) {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
     return this.title; 
    }
  }
}
 
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  console.log('target', target)
  console.log('propertyKey', propertyKey)
  console.log('parameterIndex', parameterIndex)
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
 
function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  let method = descriptor.value!;
 
  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }
    return method.apply(this, arguments);
  };
}
