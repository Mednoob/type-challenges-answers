// https://github.com/type-challenges/type-challenges/blob/main/questions/14080-hard-fizzbuzz/README.md

type FizzBuzz<N extends number, R extends string[] = [], C extends number[] = [0], M3 extends number[] = [], M5 extends number[] = []>
    = C["length"] extends N
          ? [...R, M3["length"] extends 2 ? (M5["length"] extends 4 ? "FizzBuzz" : "Fizz") : M5["length"] extends 4 ? "Buzz" : `${C["length"]}`]
          : FizzBuzz<N, [...R, M3["length"] extends 2 ? (M5["length"] extends 4 ? "FizzBuzz" : "Fizz") : M5["length"] extends 4 ? "Buzz" : `${C["length"]}`], [...C, 0], M3["length"] extends 2 ? [] : [...M3, 0], M5["length"] extends 4 ? [] : [...M5, 0]>;
