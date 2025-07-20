/*kiểu array và tuples*/
/*array*/
// khai báo mảng cách 1:
let arr: string[] = ["Hello", "World"];// mảng chuỗi
let arr1: number[] = [1, 2, 3, 4, 5, 6];// mảng số
let arr2: any[] = [1, 'phu', true];// mảng chứa phần tử có giá trị bất kì
console.log(arr[0]);//Hello

// khai báo mảng cách 2:
let arr3: Array<string> = ["Hello", "Phú"];// mảng chuỗi
let arr4: Array<number> = [1, 2, 3, 4, 5];// mảng số 
let arr5: Array<any> = [4, "Hi", false]//mảng chứa phần tử có giá trị bất kì

/*tuples*/
let arr6: [string, number, boolean];
arr6 = ['Phú', 25, false];
arr6[2] = true;