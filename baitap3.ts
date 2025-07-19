let soNguyen: Array<number> = [10, 4, -10, -20, 100, 3, 7, 5, 4];
// hàm tìm tìm số chẵn
const soChan = (arr: number[]): Array<number> => {
    let chan = arr.filter((a: number) => {
        if (a % 2 == 0) {
            return true;
        }
        return false;
    })
    return chan;
}

// hàm tính tổng 
let tong: number = 0;
soNguyen.forEach((a: number): void => {
    tong += a;
});

// kiểm tra tổng chẵn hay lẻ
const kiemTra = (a: number): string => {
    if (a % 2 == 0) {
        return "Tổng là số chẵn";
    }
    return "Tổng là số lẻ";
}

//tìm số lớn nhất
let max: number = 0;
soNguyen.forEach((a: number): void => {
    if (max < a) {
        max = a;
    }
})

//xuất kết quả
console.log("Các số chẵn có trong mảng là: " + soChan(soNguyen));
console.log("Tổng các số có trong mảng là: " + tong);
console.log(kiemTra(tong));
console.log("Số lớn nhất có trong mảng là: " + max);