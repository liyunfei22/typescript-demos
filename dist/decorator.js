"use strict";
// function sealed(target) {
//   console.log('sealed', target)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function color(value: string) {
//   return function(target) {
//     console.log('color', target);
//   }
// };
// @color('red')
// @sealed
// class C {
//   x = 0;
//   y = 0;
// }
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
require("reflect-metadata");
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
// function reportableClassDecorator<T extends  { new (...args: any[]): {}}> (constructor: T) {
//   return class extends constructor {
//     reportingURL = 'HTTP:WWW...'
//   }
// }
// @reportableClassDecorator
// class BugReport2 {
//   type = 'report';
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const bug =  new BugReport2('need');
// console.log(bug);
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   @enumerable(false)
//   greet() {
//     return "hello" + this.greeting
//   }
// }
// function enumerable(value: boolean) {
//   return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.enumerable = value;
//   }
// }
// function configurable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.configurable =value;
//   }
// }
// class Point {
//   private _x: number;
//   private _y: number;
//   constructor (x: number, y: number) {
//     this._x = x;
//     this._y = y;
//   }
//   @configurable(false)
//   get x() {
//     return this._x;
//   }
//   @configurable(false)
//   get y() {
//     return this._y;
//   }
// }
// const formatMetadataKey = Symbol('format');
// class Greeter2 {
//   @format("Hello, %s")
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     let formatString = getFormat(this, "greeting");
//     return formatString.replace("%s", this.greeting);
//   }
// }
// function format(formatString: string) {
//   return Reflect.metadata(formatMetadataKey, formatString)
// }
// function getFormat(target: any, propertyKey: string) {
//   return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
// }
// const g = new Greeter2('world');
// console.log(g.greet())
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
const requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    let existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target, propertyName, descriptor) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
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
