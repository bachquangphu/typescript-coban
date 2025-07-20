import promptSync from 'prompt-sync';
const prompt = promptSync();
//hàm kiểm tra tháng
let qui2: Array<number> = [4, 5, 6];
function kiemTraThang(thang: number): void {
    if (isNaN(thang) || !Number.isInteger(thang) || thang > 12 || thang <= 0) {
        throw new Error('Tháng là số thực trong khoảng từ 0-12, vui lòng kiểm tra lại');
    }
    switch (thang) {
        case 1:
            console.log("Tháng Một");
            break;
        case 2:
            console.log("Tháng Hai");
            break;
        case 3:
            console.log("Tháng Ba");
            break;
        case 4:
            console.log("Tháng Tư");
            break;
        case 5:
            console.log("Tháng Năm");
            break;
        case 6:
            console.log("Tháng Sáu");
            break;
        case 7:
            console.log("Tháng Bảy");
            break;
        case 8:
            console.log("Tháng Tám");
            break;
        case 9:
            console.log("Tháng Chín");
            break;
        case 10:
            console.log("Tháng Mười");
            break;
        case 11:
            console.log("Tháng Mười Một");
            break;
        default:
            console.log("Tháng Mười Hai");
            break;
    }
    if (qui2.includes(thang)) {
        console.log("Là tháng thuộc quí 2");
    } else {
        console.log("Là tháng không thuộc quí 2")
    }
    console.log(thang);
}

// xuất kết quả
const num = Number(prompt('Nhập tháng: '));
kiemTraThang(num);
