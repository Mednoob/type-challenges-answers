// https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md

type Only<A, B> = A extends B ? A : never;
type MapTypes<T, R extends { mapFrom: unknown; mapTo: unknown }> = { [K in keyof T]: T[K] extends R["mapFrom"] ? Only<R, { mapFrom: T[K] }>["mapTo"] : T[K]};

type StringToNumber = { mapFrom: string; mapTo: number;}
type StringToNumber = { mapFrom: string; mapTo: number;}
type StringToDate = { mapFrom: string; mapTo: Date;}
MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
