// từ khoá this

let person = {
    firstName: "Anh",
    lastName: "Tranngoc",
    // Bởi vì từ khóa "this" được sử dụng trong phương thức
    // showFullName dưới đây, và phương thức này được định nghĩa trong
    // đối tượng person, "this" sẽ có giá trị của đối tượng person bởi
    // vì đối tượng này sẽ gọi showFullName()
    showFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

person.showFullName(); // Anh Tranngoc