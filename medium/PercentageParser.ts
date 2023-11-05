//https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md

type PercentageParser<A extends string, S = "", N extends string = ""> =
  A extends "%" | ""
    ? [S, N, A]
    : A extends `${infer L extends "-" | "+"}${infer R}`
      ? PercentageParser<R, L, N>
      : A extends `${infer L extends number}${infer R}`
        ? PercentageParser<R, S, `${N}${L}`>
        : never;

type PString1 = ""
type PString2 = "+85%"
type PString3 = "-85%"
type PString4 = "85%"
type PString5 = "85"

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]
