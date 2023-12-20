"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.Photo = exports.User = void 0;
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
let userJson = [
    {
        "id": 1,
        "firstName": "Johny",
        "lastName": "Cage",
        "age": 27
    },
    {
        "id": 2,
        "firstName": "Ismoil",
        "lastName": "Somoni",
        "age": 50
    },
    {
        "id": 3,
        "firstName": "Luke",
        "lastName": "Dacascos",
        "age": 12
    }
];
class User {
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
    isAdult() {
        return this.age > 36 && this.age < 60;
    }
}
exports.User = User;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
let users = (0, class_transformer_1.plainToClass)(User, userJson);
console.log(users);
const defaultUser = new User();
const userInstance = new User();
userInstance.id = 2;
defaultUser.firstName = 'user';
let mixedUser = (0, class_transformer_1.plainToClassFromExist)(defaultUser, { age: 18, firstName: 'l', lastName: 'li' });
console.log(mixedUser.getName());
let photo = (0, class_transformer_1.classToPlain)(userInstance);
console.log(photo);
const jsonString = (0, class_transformer_1.serialize)(userInstance); // userInstance to JSON string
console.log(jsonString);
const jsonString2 = `{
  "id": 3,
  "name": "li"
}`;
const userInstance2 = (0, class_transformer_1.deserialize)(User, jsonString2);
console.log(userInstance2);
class User2 {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], User2.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], User2.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], User2.prototype, "lastName", void 0);
const fromPlainUser = {
    unkownProp: 'hello there',
    firstName: 'Umed',
    lastName: 'Khudoiberdiev',
};
console.log('----');
console.log((0, class_transformer_1.plainToClass)(User2, fromPlainUser, { excludeExtraneousValues: true }));
class Photo {
}
exports.Photo = Photo;
class Album {
}
exports.Album = Album;
__decorate([
    (0, class_transformer_1.Type)(() => Photo),
    __metadata("design:type", Array)
], Album.prototype, "photos", void 0);
let album = (0, class_transformer_1.plainToClass)(Album, {
    id: 1,
    name: 'al',
    photos: [
        {
            id: 1,
            filename: 'sss',
            depth: 1245,
            "__type": "underwater"
        }
    ]
});
console.log(album);
