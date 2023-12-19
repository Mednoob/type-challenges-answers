// https://github.com/type-challenges/type-challenges/blob/main/questions/00147-hard-c-printf-parser/README.md

type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<T>
  = T extends `%${infer L}${infer R}`
    ? L extends keyof ControlsMap
      ? [ControlsMap[L], ...ParsePrintFormat<R>]
      : ParsePrintFormat<R>
    : T extends `${string}${infer R}`
      ? ParsePrintFormat<R>
      : [];
