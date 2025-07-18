// Các kiểu dữ liệu trong typescript

// boolean : chỉ có 2 giá trị là true hoặc false
let bai4_1: boolean = true;
console.log(bai4_1);//true

// number: kiểu số 
let decimal: number = 6;
console.log(decimal);//6
let hex: number = 0xf00d;
console.log(hex);//61453
let binary: number = 0b1010;
console.log(binary);//10
let octal: number = 0o744;
console.log(octal);//484

// kiểu string: kiểu chuỗi
let color: string = "blue";
color = "red";
console.log(color);//red

let fullname: string = "Bob";
let age: number = 37;
let sentence: string = `hello my name is ${fullname}. I'll be ${age + 1} years old next month.`;
console.log(sentence);//hello my name is Bob. I'll be 38 years old next month.( dấu `` là dấu kết bên số 1 không phải dấu ' kết bên phím enter)

//array: kiểu mảng 
let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3, 4, 5];

//tuple: mảng vừa số vừa chữ
let x: [string, number];
x = ["hello", 10];
console.log(x);//[ 'hello', 10 ]


//enum: là tập hợp các hàng số được đặt tên
enum trangThaiDonHang {
    ChoXacNhan,
    DaXacNhan,
    DangGiao,
    DaGiao,
    DaHuy
};

let trangThai: trangThaiDonHang = trangThaiDonHang.DangGiao;
console.log(trangThai);// 2( vị trí của DangGiao trong enum)
console.log(trangThaiDonHang[2]);//DangGiao

//any: là kiểu đặc biệt cho phép khai báo biến mà không cần chỉ định kiểu giá trị cụ thể
let ketQua: any = true;//kiểu boolean
ketQua = "đậu";//kiểu string
ketQua = 9;// kiểu number
ketQua = [1, 2, 4, 5]; // kiểu mảng và tất cả đều đúng

//void: đại diện cho hàm không trả về giá trị nào. Nó thường được dùng để chỉ rõ hàm không trả về giá trị,khác với undefined mà có thể dược traa3 về từ hàm
// nó dược dùng để khai báo hàm không có return hay có return nhưng không có giá trị trả về
const logMessage = (message: string): void => {
    console.log(message);// hàm không có return
};
function doSomething(): void {
    //....
    return;// hàm có return nhưng không có giá trị trả về
}

//null và undefined: giống js

//never: biểu thị 1 giá trị không bao giờ xảy ra. 