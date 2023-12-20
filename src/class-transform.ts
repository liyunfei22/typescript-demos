import 'reflect-metadata';
import { plainToClass, plainToClassFromExist, classToPlain, serialize, deserialize, Expose, Type } from 'class-transformer';

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
]
export class User {
  @Expose()
  id: number;

  firstName: string;

  lastName: string;

  age: number;

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}

let users = plainToClass(User, userJson);
console.log(users)
const defaultUser = new User();
const userInstance = new User();
userInstance.id = 2
defaultUser.firstName = 'user';

let mixedUser = plainToClassFromExist(defaultUser, {age: 18, firstName: 'l',  lastName: 'li'});
console.log(mixedUser.getName())
let photo = classToPlain(userInstance);
console.log(photo)
const jsonString = serialize(userInstance); // userInstance to JSON string
console.log(jsonString)
const jsonString2 = `{
  "id": 3,
  "name": "li"
}`
const userInstance2 = deserialize(User, jsonString2)
console.log(userInstance2)


class User2 {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;
}

const fromPlainUser = {
  unkownProp: 'hello there',
  firstName: 'Umed',
  lastName: 'Khudoiberdiev',
};
console.log('----')
console.log(plainToClass(User2, fromPlainUser, { excludeExtraneousValues: true }));

export class Photo {
  id: number;
  filename: string;
}

export class Album {
  id: number;
  name: string;

  @Type(() => Photo)
  photos: Photo[]
}

let album = plainToClass(Album, {
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
console.log(album)


