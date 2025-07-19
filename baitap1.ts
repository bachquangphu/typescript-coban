import promptSync from 'prompt-sync';
const prompt = promptSync();
// hàm nhập điểm 
const nhapDiem = (monHoc: string, diem: number): number => {
    if (diem > 10 || diem <= 0 || isNaN(diem)) {
        throw new Error(`Điểm ${monHoc} số trong khoảng từ 0-10, vui lòng kiểm tra lại`);
    }
    return diem;
}

//hàm xếp loại học lực
const xepLoai = (tinh: number): string => {
    if (tinh >= 8.5) {
        return "Giỏi";
    }
    if (tinh >= 7.5 && tinh < 8.5) {
        return "Khá";
    }
    if (tinh >= 5 && tinh < 7.5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

//Nhập
const toan = nhapDiem("Môn Toán", Number(prompt("nhập điểm môn Toán: ")));
const van = nhapDiem("Môn Văn", Number(prompt("nhập điểm môn Văn: ")));
const anh = nhapDiem("Môn Anh", Number(prompt("nhập điểm môn Anh: ")));

// xuất kết quả
const tb = (toan + van + anh) / 3;
console.log("Điểm trung bình của ba môn là: " + tb);
console.log(xepLoai(tb));