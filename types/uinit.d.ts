type A = Awaited<number | Promise<string>>;
declare class C {
}
type B = ConstructorParameters<new (x?: string) => object>;
declare class Animal {
}
type AnimalConstructor = new () => Animal;
declare function create(C: AnimalConstructor): Animal;
type F = {
    new (s: string): Object;
    (n: number): number;
};
type T1 = Exclude<'a' | 'b', 'a'>;
type T2 = Extract<'a' | 'b', 'a' | 'c'>;
type T3 = InstanceType<new () => string>;
type T4 = InstanceType<ErrorConstructor>;
type T5 = InstanceType<typeof C>;
type T6 = NonNullable<string | undefined>;
interface D {
    x: number;
    y: number;
}
type T7 = Omit<D, 'x'>;
declare function toHex(this: Number): string;
type T8 = OmitThisParameter<typeof toHex>;
type T9 = Parameters<typeof toHex>;
type T10 = Partial<D>;
type T11 = Pick<D, 'x'>;
type T12 = Readonly<D>;
type T13 = Record<'a' | 'b', number>;
type T14 = Required<T10>;
declare const arr: ReadonlyArray<number>;
type T15 = ReturnType<typeof create>;
