"use strict";
// import "reflect-metadata";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(target) {
    console.log('sealed', target);
}
function color(target) {
    console.log('color outer');
}
;
let C = class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
};
C = __decorate([
    color,
    sealed
], C);
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
function reportableClassDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.reportingURL = 'HTTP:WWW...';
        }
    };
}
let BugReport2 = class BugReport2 {
    constructor(t) {
        this.type = 'report';
        this.title = t;
    }
};
BugReport2 = __decorate([
    reportableClassDecorator,
    __metadata("design:paramtypes", [String])
], BugReport2);
const bug = new BugReport2('need');
console.log(bug);
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "hello" + this.greeting;
    }
};
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Greeter.prototype, "greet", null);
Greeter = __decorate([
    reportableClassDecorator,
    __metadata("design:paramtypes", [String])
], Greeter);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log('--------------------');
        console.log('target', target === Greeter.prototype);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor.value.toString());
        descriptor.enumerable = value;
    };
}
const a = new Greeter('hello');
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Point3 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Point3.prototype, "x", null);
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Point3.prototype, "y", null);
require("reflect-metadata");
const formatMetadataKey = Symbol('format');
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
class Greeter2 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
__decorate([
    format("Hello, %s"),
    __metadata("design:type", String)
], Greeter2.prototype, "greeting", void 0);
const g = new Greeter2('world');
console.log(g.greet());
const requiredMetadataKey = Symbol("required");
class BugReport {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
    print(verbose, x) {
        if (verbose) {
            return `type: ${this.type}\ntitle: ${this.title}`;
        }
        else {
            return this.title;
        }
    }
}
__decorate([
    __param(0, required),
    __param(1, required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Boolean]),
    __metadata("design:returntype", void 0)
], BugReport.prototype, "print", null);
function required(target, propertyKey, parameterIndex) {
    console.log('target', target);
    console.log('propertyKey', propertyKey);
    console.log('parameterIndex', parameterIndex);
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
