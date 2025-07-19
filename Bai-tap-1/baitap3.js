let arr = [-1, 4, 6, 3, 5, 9, 10, 20, 3];
let soChan = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        soChan.push(arr[i]);
    }
}
console.log("Tổng các số chẵn trong mảng là: " + soChan.join());
let tong = 0;
for (let phanTu of arr) {
    tong += phanTu;
}
console.log("Tổng các phần tử trong mảng là  " + tong);
if (tong % 2 == 0) {
    console.log("tổng là số chẵn");
} else {
    console.log("tổng là số lẻ");
}
let trungGian = arr[0];
for (let dem of arr) {
    if (trungGian < dem) {
        trungGian = dem;
    }
}
console.log("Số Lớn nhất có trong mảng là " + trungGian);
let tong2 = 0;
function tinhTong(a) {
    tong2 += a;
}
arr.forEach(tinhTong);
console.log("tổng các phần tử trong mảng là: " + tong2);

let a = arr[0];
const nhoNhat = (min) => {
    if (a > min) {
        a = min;
    }
}
arr.forEach(nhoNhat);
console.log('Số nhỏ nhất là: ' + a);

let arr1 = arr.filter(function sochan(b) {
    if (b % 2 == 0) {
        return true;
    }
    return false;
});
console.log(arr1.join());

let arr3 = arr.map((c) => {
    tich = c * 2;
    return tich;
});
console.log("mảng mới gồm các phần tử mảng cũ nhân 2 là" + arr3.join());

let arr4 = arr.map((d) => {
    if (d % 2 == 0) {
        return ("chẵn");
    }
    return ("lẻ");
});
console.log("mảng mới là: " + arr4.join());