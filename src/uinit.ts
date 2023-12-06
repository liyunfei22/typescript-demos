console.log('unit')
type A = Awaited<number | Promise<string>>
class C {}
type B = ConstructorParameters<
new (x?: string) => object>
class Animal {

}
type AnimalConstructor = new () => Animal

function create(C:AnimalConstructor) {
  return new C();
}

type F = {
  new (s: string): Object;
  (n: number): number;
}
type T1 = Exclude<'a' | 'b', 'a'>
type T2 = Extract<'a' | 'b', 'a' | 'c'>
type T3 = InstanceType<new () => string>
type T4 = InstanceType<ErrorConstructor>
// 由于 Class 作为类型，代表实例类型。要获取它的构造方法，必须把它当成值，然后用typeof运算符获取它的构造方法类型。

type T5 = InstanceType<typeof C>

type T6 = NonNullable<string | undefined>
interface D {
  x: number;
  y: number;
}
type T7 = Omit<D, 'x'>

function toHex(this: Number) {
  return this.toString(16)
}
type T8 = OmitThisParameter<typeof toHex>
type T9 = Parameters<typeof toHex>
type T10 = Partial<D>
type T11 = Pick<D, 'x'>
type T12 = Readonly<D>

type T13 = Record<'a' | 'b', number>
type T14 = Required<T10>

const arr: ReadonlyArray<number> = [1, 1]

type T15 = ReturnType<typeof create>
// Uppercase Lowercase Capitalize Uncapitalize