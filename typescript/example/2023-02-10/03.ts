import { expectType, expectNotType } from "tsd"

expectType<string>("love")
expectNotType<string>("i love you")
