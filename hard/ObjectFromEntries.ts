// https://github.com/type-challenges/type-challenges/blob/main/questions/02949-hard-objectfromentries/README.md

type ObjectFromEntries<T extends [any, any]> = { [K in T as `${K[0]}`]: K[1] };

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type result = ObjectFromEntries<ModelEntries> // expected to be Model
