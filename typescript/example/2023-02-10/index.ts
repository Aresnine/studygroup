// 数组的类型标注
const arr1: [] = []
// arr2 与 arr3 相同 建议使用 arr2
const arr2: string[] = []
const arr3: Array<string> = []

// 固定长度的数组，元组
const arr4: string[] = ["a", "b", "c"]
console.log(arr4[2])
console.log(arr4[2111])

const arr5: [string, string, number] = ["a", "b", 12]
// console.log(arr5[5])
