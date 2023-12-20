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
exports.Post = void 0;
const class_validator_1 = require("class-validator");
class Post {
}
exports.Post = Post;
__decorate([
    (0, class_validator_1.Length)(10, 20),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.Contains)('hello'),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(3, {
        message: '你太小了'
    }),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], Post.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Post.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Post.prototype, "createDate", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(10, {
        each: true
    }),
    __metadata("design:type", Array)
], Post.prototype, "tags", void 0);
let post = new Post();
post.title = 'Hello_Hello'; // should not pass
post.text = 'this is a great post about hello world'; // should not pass
post.rating = 2; // should not pass
post.email = '1@gmail.com'; // should not pass
post.tags = [
    'sssss',
    'dddd'
];
post.nonWhitelistedProperty = 69;
post.anotherNonWhitelistedProperty = "something";
(0, class_validator_1.validate)(post, {
    whitelist: true,
    skipMissingProperties: false,
    forbidNonWhitelisted: false
}).then(errors => {
    // errors is an array of validation errors
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
    }
    else {
        console.log('validation succeed');
    }
});
// validateOrReject(post).catch(errors => {
//   console.log('Promise rejected (validation failed). Errors: ', errors);
// });
