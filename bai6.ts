/* const */
/*không hỗ trợ hoisting
không thể gán lại giá trị cho nó 
bắt buộc gán giá trị khi mà khai báo
đối với kiểu object không thể gán một object mới nhưng có thể đặt một giá trị mới cho phần tử */
let number;
const number1 = 10;
//number1 = 11; không thể gắn 1 giá trị khác cho hằng 
number = 10;

const obj = {
    name: "Phu"
}
obj.name = "Bạch Quang Phú";
//obj = "Bạch Quang Phú"; không gán được vì nó là hằng
console.log(obj.name);// nhận sau khi đã gán giá trị mới cho phần tử 


