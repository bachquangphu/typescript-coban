//giá trị mặc định cho tham số function
let getBonus = function (value = 1000, tax = 300) {
    console.log(value + tax);
};
getBonus(undefined, 40);//1040
//nếu điền undefined thì hàm sẽ lấy giá trị mặc định ở vị trí giá trị đó
let getBonus1 = function (value = 1000, tax = value * 0.1) {
    console.log(value + tax);
};
getBonus();//1300
getBonus(undefined, 40);//1040 
//tham số sau có thế gán giá trị của tham số trước nhưng tham số trước không thể gán giá trị tham số sau
//(không hỗ trợ hoisting): khai báo trước khi dùng