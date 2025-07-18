/* cơ chế hoisting cho phép bạn sử dụng biến và hàm tước khi khai báo chúng
lưu ý:
+ khi khai báo biến bằng var biến đó sẽ được nâng lên đầu phạm vi của nó(scope) nhưng giá trị của nó sẽ là undefined cho tới khi bạn gán giá trị thực sự
+ hàm cũng tương tự như var các hàm khai báo bằng function cũng được hoisting. gọi hàm trước rồi khai báo sau 
+ let và const không hỗ trợ  hoisting, chúng không thể sử dụng mà chưa khai báo. sử dụng trước khi khai báo sẽ xảy ra lỗi ReferenceError
*/

tinhTong(5);
let tong2: number = 0;
function tinhTong(a: number): void {
  tong2 += a;
}

console.log(tong2);
