import 'reflect-metadata';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    getName(): string;
    isAdult(): boolean;
}
export declare class Photo {
    id: number;
    filename: string;
}
export declare class Album {
    id: number;
    name: string;
    photos: Photo[];
}
