/*spread parameter: cho phép bạn mở rộng một mảng hoặc một đối tượng thành các phần tử riêng lẻ hoặc các thuộc tính của nó
giúp việc sao chép, kết hợp sửa đổi dược dễ dàng hơn.*/
const displayColorsSpread = (message: string, ...colors: Array<string>) => {
    for (let i in colors) {
        console.log(colors[i]);
    }
};

let messageSpread = "hello";
let colors = ['red', 'green', 'blue']
displayColorsSpread(messageSpread, ...colors);//red, green, blue