// rest parameter: cho phép 1 hàm nhận vào một số lượng đối số không xác định, và chúng được gom lại thành 1 mảng duy nhất
// rest parameter dược biểu diễn bằng dấu 3 chấm (...) trước tên biến
const displayColors = (...colors: Array<string>): Array<string> => {
    console.log(colors);// in ra mảng
    for (let i in colors) {
        console.log(colors[i]);
    }
    return colors;
};
displayColors('red');//red
displayColors('red', 'green');//red , green
console.log(displayColors('red', 'green', 'blue'));//[ 'red', 'green', 'blue' ]