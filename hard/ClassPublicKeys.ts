// https://github.com/type-challenges/type-challenges/blob/main/questions/02828-hard-classpublickeys/README.md

type ClassPublicKeys<T> = keyof T;

class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}

type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'
