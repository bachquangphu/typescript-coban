import { validateLocaleAndSetLanguage } from "typescript";

/* Decorator là tính năng cho phép bạn sửa đổi hoặc mở rộng hành vi của các lớp, phương thức, thuộc tinh1va2 tham số tại thời điểm khai báo
Cúp pháp: Decorator được biểu diễn bằng dấu @ theo sau là tên của 1 hàm*/
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@require name: string) {
        return "hello" + name + "," + this.greeting;
    }
}
