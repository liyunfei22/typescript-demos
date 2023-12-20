import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsDate,
  Min,
  MaxLength,
  Max,
} from 'class-validator';

export class Post {
  @Length(10, 20)
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(3, {
    message: '你太小了'
  })
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsDate()
  createDate: Date;

  @MaxLength(10, {
    each: true
  })
  tags:string[]

  nonWhitelistedProperty: number
}

let post = new Post();
post.title = 'Hello_Hello'; // should not pass
post.text = 'this is a great post about hello world'; // should not pass
post.rating = 2; // should not pass
post.email = '1@gmail.com'; // should not pass
post.tags = [
  'sssss',
  'dddd'
]
post.nonWhitelistedProperty = 69;
(post as any).anotherNonWhitelistedProperty = "something";

validate(post, {
  whitelist: true,
  skipMissingProperties: false,
  forbidNonWhitelisted: false
}).then(errors => {
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log('validation failed. errors: ', errors);
  } else {
    console.log('validation succeed');
  }
});

// validateOrReject(post).catch(errors => {
//   console.log('Promise rejected (validation failed). Errors: ', errors);
// });