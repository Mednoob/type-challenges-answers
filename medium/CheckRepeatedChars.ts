// https://github.com/type-challenges/type-challenges/blob/main/questions/09142-medium-checkrepeatedchars/README.md

type CheckRepeatedChars<T extends string, O extends string = ""> = T extends `${infer F}${infer S}` ? F extends O ? true : CheckRepeatedChars<S, O | F> : false

type A = CheckRepeatedChars<'abc'>   // false
type B = CheckRepeatedChars<'aba'>   // true
